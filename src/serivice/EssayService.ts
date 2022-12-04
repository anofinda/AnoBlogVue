import http from "@/web/http";
class EssayService {
  getEssayByTagName(tagName: string): Promise<any> {
    return http.get("/essay/tag", {
      params: {
        tagName: tagName,
      },
    });
  }
  getEssayById(id: number): Promise<any> {
    return http.get("/essay/" + id.toString());
  }
}
export default new EssayService();
