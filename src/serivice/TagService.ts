import http from "@/web/http";
class TagService {
  getTags(): Promise<any> {
    return http.get("/tags");
  }
  getTagById(id: number): Promise<any> {
    return http.get("/tag/" + id.toString());
  }
}
export default new TagService();
