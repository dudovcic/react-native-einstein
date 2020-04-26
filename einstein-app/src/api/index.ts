interface APIQuestions {
  questions: string[];
}

export const fetchQuestions = (
  reqUrl: string = 'localhost:3000/'
): Promise<APIQuestions> => {
  return fetch(reqUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};
