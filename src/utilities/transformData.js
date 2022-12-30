
export const transformData = (data) => {
  try {
    const posts = data.data.children;
    const newData = posts.map(item => {
      const {data: {
        author,
        id,
        title,
        thumbnail,
        ups,
      }} = item;
      return {
        author,
        id,
        title,
        thumbnail,
        ups,
      }
    });
    return newData;
  } catch (error) {
    console.log('загрузка');
  }

}