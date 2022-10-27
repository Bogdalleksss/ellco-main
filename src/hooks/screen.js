import { mediaPoints } from "../utils/constants";

export const useScreen = () => {
  const screen = window.innerWidth;

  return {
    mediaPoint: mediaPoints.find(point => point <= screen),
  };
}
