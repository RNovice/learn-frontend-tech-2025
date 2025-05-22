import { z } from "zod";
import countries from "../data/countries";
import { differenceInYears } from "date-fns";
import type { CountryType } from "../data/countries";

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(20, { message: "Username must be at most 20 characters long" })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username must be alphanumeric",
      }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "Invalid password",
      }),
    confirmPassword: z.string(),
    fullName: z.string().nonempty({
      message: "Full name is required",
    }),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9]\d{1,14}$/, {
        message: "Invalid phone number",
      })
      .optional()
      .or(z.literal("")),
    dateOfBirth: z
      .string()
      .nonempty({
        message: "Date of birth is required",
      })
      .refine(
        (val) => {
          const age = differenceInYears(new Date(), new Date(val));
          return age >= 18;
        },
        { message: "You must be at least 18 years old" }
      ),
    gender: z
      .union([z.enum(["male", "female", "other"]), z.literal("")])
      .optional(),
    country: z.string().superRefine((val, ctx) => {
      if (val === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Country is required",
        });
        return;
      }
      if (!countries.includes(val as CountryType)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a valid country",
        });
      }
    }),
    profileUrl: z.string().url().optional().or(z.literal("")),
    bio: z
      .string()
      .max(300, { message: "Bio must be at most 300 characters long" })
      .optional(),
    newsletter: z.boolean().optional(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type SignupType = z.infer<typeof signupSchema>;
