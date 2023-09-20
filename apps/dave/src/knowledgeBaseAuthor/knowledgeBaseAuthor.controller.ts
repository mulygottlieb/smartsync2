import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KnowledgeBaseAuthorService } from "./knowledgeBaseAuthor.service";
import { KnowledgeBaseAuthorControllerBase } from "./base/knowledgeBaseAuthor.controller.base";

@swagger.ApiTags("knowledgeBaseAuthors")
@common.Controller("knowledgeBaseAuthors")
export class KnowledgeBaseAuthorController extends KnowledgeBaseAuthorControllerBase {
  constructor(protected readonly service: KnowledgeBaseAuthorService) {
    super(service);
  }
}
