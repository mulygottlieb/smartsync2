import { Module } from "@nestjs/common";
import { KnowledgeBaseAuthorModuleBase } from "./base/knowledgeBaseAuthor.module.base";
import { KnowledgeBaseAuthorService } from "./knowledgeBaseAuthor.service";
import { KnowledgeBaseAuthorController } from "./knowledgeBaseAuthor.controller";
import { KnowledgeBaseAuthorResolver } from "./knowledgeBaseAuthor.resolver";

@Module({
  imports: [KnowledgeBaseAuthorModuleBase],
  controllers: [KnowledgeBaseAuthorController],
  providers: [KnowledgeBaseAuthorService, KnowledgeBaseAuthorResolver],
  exports: [KnowledgeBaseAuthorService],
})
export class KnowledgeBaseAuthorModule {}
