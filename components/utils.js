import Toast from "react-native-toast-message";

export const showPromiseToast = (
  promise,
  options = {},
  resetSubmittingState
) => {
  const {
    loadingMessage = "Loading...",
    successMessage = "Operation successful!",
    errorMessage = "An error occurred.",
    ...toastOptions
  } = options;

  const defaultToastOptions = {
    position: "top",
    topOffset: 50,
    text1Style: {
      fontSize: 18,
      fontWeight: "bold",
      color: "black",
    },
    text2Style: {
      fontSize: 16,
      color: "black",
    },
    style: {
      width: 600,
      backgroundColor: "white",
      borderRadius: 10,
      alignSelf: "center",
    },
  };

  // Show a loading toast
  Toast.show({
    type: "info",
    text1: loadingMessage,
    ...defaultToastOptions,
    ...toastOpti2ons,
  });

  promise
    .then((result) => {
      Toast.show({
        type: "success",
        text1: successMessage,
        ...defaultToastOptions,
        ...toastOptions,
      });

      return result;
    })
    .catch((error) => {
      Toast.show({
        type: "error",
        text1: errorMessage,
        ...defaultToastOptions,
        ...toastOptions,
      });

      throw error;
    })
    .finally(() => {
      resetSubmittingState();
    });
};
