import * as graphql from "@nestjs/graphql";
import { KnowledgeBaseAuthorResolverBase } from "./base/knowledgeBaseAuthor.resolver.base";
import { KnowledgeBaseAuthor } from "./base/KnowledgeBaseAuthor";
import { KnowledgeBaseAuthorService } from "./knowledgeBaseAuthor.service";

@graphql.Resolver(() => KnowledgeBaseAuthor)
export class KnowledgeBaseAuthorResolver extends KnowledgeBaseAuthorResolverBase {
  constructor(protected readonly service: KnowledgeBaseAuthorService) {
    super(service);
  }
}
