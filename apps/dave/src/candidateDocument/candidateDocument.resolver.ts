import * as graphql from "@nestjs/graphql";
import { CandidateDocumentResolverBase } from "./base/candidateDocument.resolver.base";
import { CandidateDocument } from "./base/CandidateDocument";
import { CandidateDocumentService } from "./candidateDocument.service";

@graphql.Resolver(() => CandidateDocument)
export class CandidateDocumentResolver extends CandidateDocumentResolverBase {
  constructor(protected readonly service: CandidateDocumentService) {
    super(service);
  }
}
