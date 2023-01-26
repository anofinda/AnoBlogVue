import type { Essay } from "@/types/Essay";
import type { Tag } from "@/types/Tag";
import http from "@/web/BlogApi";
import type { AxiosResponse } from "axios";
class EssayService {
  getEssaysByTagName(tagName: string): Promise<AxiosResponse<Tag[], any>> {
    return http.get("/essay/tag", {
      params: {
        tagName: tagName,
      },
    });
  }
  getEssayById(id: number): Promise<AxiosResponse<Essay, any>> {
    return http.get("/essay/" + id.toString());
  }
  getEssaysByTag(tag: Tag): Promise<AxiosResponse<Tag[], any>> {
    return this.getEssaysByTagName(tag.tagName);
  }
}
export default new EssayService();
