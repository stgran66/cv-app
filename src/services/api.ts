const BASE_URL = 'https://62cbcfcd8042b16aa7c2d987.mockapi.io/blog/api';

export const fetchComments = async (
  page?: number,
  limit?: number,
  order?: string
) => {
  try {
    const url = new URL(`${BASE_URL}/comments`);

    url.searchParams.append('sortby', 'createdAt');
    limit && url.searchParams.append('limit', limit.toString());
    page && url.searchParams.append('page', page.toString());
    order && url.searchParams.append('order', order.toString());

    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchServices = async () => {
  try {
    const url = new URL(`${BASE_URL}/services`);
    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExperience = async () => {
  try {
    const url = new URL(`${BASE_URL}/experience`);
    const data = await fetch(url);
    const parsedData = await data.json();
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};

interface postCommentProps {
  name: string;
  email: string;
  content: string;
}
// TODO just import type comment
export const postComment = async (comment: postCommentProps) => {
  try {
    console.log(comment);
    const url = new URL(`${BASE_URL}/comments`);
    const data = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(comment),
    });
    console.log(data);
    const parsedData = await data.json();
    console.log(parsedData);
  } catch (error) {
    console.log(error);
  }
};
