export const USER_ROLE = {
    admin: "admin",
  } as const;

  export type TUserRole = keyof typeof USER_ROLE;