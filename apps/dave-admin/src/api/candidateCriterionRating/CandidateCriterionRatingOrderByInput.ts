import { SortOrder } from "../../util/SortOrder";

export type CandidateCriterionRatingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  feedbackId?: SortOrder;
  tenantId?: SortOrder;
  organizationId?: SortOrder;
  personalQualityId?: SortOrder;
  technologyId?: SortOrder;
};
