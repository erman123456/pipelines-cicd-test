import axios from 'axios';

let newsId = ""
let topicId = ""
describe('POST /', () => {
  it('e2e api post news', async () => {
    const res = await axios.post(`/api/news/`,
      {
        "title": "string",
        "description": "string",
        "topic": {
          "create": [
            {
              "topic_name": "string",
              "description": "string"
            }
          ]
        }
      });
    newsId = res.data.payload.id
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api post topic', async () => {
    const res = await axios.post(`/api/topic/`,
      {
        "topic_name": "string",
        "description": "string",
        "newsId": newsId
      });
    topicId = res.data.payload.id
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });
});
describe('PUT /', () => {
  it('e2e api update news', async () => {
    const res = await axios.put(`/api/news/` + newsId,
      {
        "title": "string",
        "description": "string"
      });
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api update topic', async () => {
    const res = await axios.put(`/api/topic/` + topicId,
      {
        "topic_name": "string",
        "description": "string",
        "newsId": newsId
      });
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });
});

describe('GET /', () => {
  it('e2e api get news', async () => {
    const res = await axios.get(`/api/news/`);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api get news by id', async () => {
    const res = await axios.get(`/api/news/` + newsId);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api get topic', async () => {
    const res = await axios.get(`/api/topic/`);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api get topic by id', async () => {
    const res = await axios.get(`/api/topic/` + topicId);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });
});
describe('DELETE /', () => {
  it('e2e api delete news by id', async () => {
    const res = await axios.delete(`/api/news/` + newsId);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });

  it('e2e api delete topic by id', async () => {
    const res = await axios.delete(`/api/topic/` + topicId);
    expect(res.status).toBe(200);
    expect(res.data.message).toEqual("Success");
  });
});
