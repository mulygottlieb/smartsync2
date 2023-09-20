import { CandidateSkill as TCandidateSkill } from "../api/candidateSkill/CandidateSkill";

export const CANDIDATESKILL_TITLE_FIELD = "name";

export const CandidateSkillTitle = (record: TCandidateSkill): string => {
  return record.name?.toString() || String(record.id);
};
