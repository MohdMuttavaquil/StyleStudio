import { toast } from 'react-toastify';

type data = {
  success: boolean,
  message: string
}

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showtost = (data: data) =>{
  if (!data.success) {
    showErrorToast(data.message)
  } else{
    showSuccessToast(data.message)
  }
}