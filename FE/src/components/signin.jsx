import Joi from "joi";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import instance from "../utils/axiosInstance";
import { setAuth } from "./core/AuthHelper";

const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      "string.empty": "Email không được để trống",
      "string.email": "Email không đúng định dạng",
      "any.required": "Email là bắt buộc",
    }),
  password: Joi.string()
    .required()
    .min(4)
    .messages({
      "string.empty": "Mật khẩu không được để trống",
      "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
      "any.required": "Mật khẩu là bắt buộc",
    }),
});

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: async (signinData) => {
      const { data } = await instance.post("auth/sign-in", signinData);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Đăng nhập thành công!");
      localStorage.setItem("accessToken", data.accessToken);
      sessionStorage.setItem("accessToken", data.accessToken);
      // setAuth(data);
      navigate("/tiktok-shop-dashboard");
    },
    onError: () => {
      toast.error("Email hoặc mật khẩu không đúng!");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full">
          <div className="border border-slate-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="mb-12">
                <h3 className="text-slate-900 text-3xl font-semibold">Đăng nhập</h3>
                <p className="text-slate-500 text-sm mt-6 leading-relaxed">
                  Đăng nhập tài khoản để bắt đầu trải nghiệm.
                </p>
              </div>

              <div>
                <label className="text-slate-800 text-sm font-medium mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full text-sm text-slate-800 border border-slate-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600"
                    placeholder="Nhập email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm absolute -bottom-5 left-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
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
                  {errors.password && (
                    <span className="text-red-500 text-sm absolute -bottom-5 left-1">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-500">
                    Ghi nhớ đăng nhập
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-blue-600 hover:underline font-medium">
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              <div className="!mt-12">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shadow-xl py-2.5 px-4 text-[15px] font-medium tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
                >
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                </button>
                <p className="text-sm !mt-6 text-center text-slate-500">
                  Chưa có tài khoản?
                  <a href="/logup" className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                    Đăng ký tại đây
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover"
              alt="login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
