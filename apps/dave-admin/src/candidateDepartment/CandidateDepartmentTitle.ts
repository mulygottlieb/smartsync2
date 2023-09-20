import { CandidateDepartment as TCandidateDepartment } from "../api/candidateDepartment/CandidateDepartment";

export const CANDIDATEDEPARTMENT_TITLE_FIELD = "id";

export const CandidateDepartmentTitle = (
  record: TCandidateDepartment
): string => {
  return record.id?.toString() || String(record.id);
};
