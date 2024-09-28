import * as WebBrowser from 'expo-web-browser';

export const linkToYoutube = async (videoID: string) => {
  const baseUrl = `https://m.youtube.com/watch?v=${videoID}`;
  await WebBrowser.openBrowserAsync(baseUrl);
};
