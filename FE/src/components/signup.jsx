import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import instance from "../utils/axiosInstance";
import image from "../image/image.jpg";

const signupSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.email": "Email không hợp lệ",
    "string.empty": "Email là bắt buộc",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu là bắt buộc",
    "string.min": "Mật khẩu phải có ít nhất 6 ký tự",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "Cần xác nhận mật khẩu",
    "any.only": "Mật khẩu xác nhận không khớp",
  }),
  role: Joi.string().default("member"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      role: "member",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (signup) => {
      const { data } = await instance.post(`auth/sign-up`, signup);
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      toast.success("Tài khoản đã được thêm thành công!");
      navigate("/login");
    },
    onError: () => {
      toast.error("Tài khoản không được thêm");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-slate-900 text-3xl font-semibold">Đăng ký</h3>
                  <img src={image} alt="2T DATA" className="h-[80px] w-[120px]" />
                </div>
                <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                  Tạo tài khoản để bắt đầu hành trình khám phá của bạn.
                </p>
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter email"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Mật khẩu</label>
                <div className="relative flex items-center">
                  <input
                    {...register("password")}
                    type="password"
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Nhập lại mật khẩu</label>
                <div className="relative flex items-center">
                  <input
                    {...register("confirmPassword")}
                    type="password"
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                    placeholder="Confirm password"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  {isPending ? "Đăng ký..." : "Đăng ký"}
                </button>
                <p className="text-sm !mt-6 text-center text-slate-500">
                Đã có một tài khoản?
                  <a href="/login" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                    Sign in
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
              alt="signup img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
