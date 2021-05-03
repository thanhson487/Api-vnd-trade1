import { toast } from "react-toastify";
export const toastError = () => {
  toast.error("Lỗi", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
