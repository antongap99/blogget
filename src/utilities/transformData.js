import { randomText } from "./randomText";

export const transformData = (data) => {
    const posts = data.data.children;
    const newData = posts.map(item => {
      let {data: {
        author,
        id,
        title,
        thumbnail,
        ups,
        selftext,
      }} = item;

      if(!selftext) {
        selftext = randomText;
      }
      return {
        author,
        id,
        title,
        thumbnail,
        ups,
        selftext,
      }
    });

    return {
      postData: newData,
      after: data.data.after,
    };
}