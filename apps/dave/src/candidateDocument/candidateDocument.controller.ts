import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CandidateDocumentService } from "./candidateDocument.service";
import { CandidateDocumentControllerBase } from "./base/candidateDocument.controller.base";

@swagger.ApiTags("candidateDocuments")
@common.Controller("candidateDocuments")
export class CandidateDocumentController extends CandidateDocumentControllerBase {
  constructor(protected readonly service: CandidateDocumentService) {
    super(service);
  }
}
