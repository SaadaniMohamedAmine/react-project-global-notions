import { toast } from "react-toastify";

export const showToast = (title, body, type = "info" ) => {
  return toast[type](
    <div className="ml-3 py-2">
      <h1 className="text-sm text-black font-bold">{title}</h1>
      <p className="text-black text-sm">{body}</p>
    </div>
  );
};
