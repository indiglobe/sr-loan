import { ROLE_ENUM } from "../enums/db-enums";

type ROLE = (typeof ROLE_ENUM)[number];

export const allowSepcifity: Record<ROLE, number> = {
  ADMIN: 0,
  AGENT: 1,
  CUSTOMER: 2,
};

export function hasAccess(requiredRole: ROLE, currentRole: ROLE) {
  return allowSepcifity[currentRole] <= allowSepcifity[requiredRole];
}
