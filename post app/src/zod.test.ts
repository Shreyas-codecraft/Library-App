import z from "zod";

test("zod tests", () => {
  const addressShema = z.object({
    street: z.string(),
    pincode: z.number(),
  });

  const userSchema = z.object({
    userId: z.number().min(1).max(10000),
    id: z
      .number()
      .min(100)
      .refine((val) => val != 50 && val != 75, {
        message: "String can't be more than 255 characters",
      }),
    title: z.string(),
    gender: z
      .union([z.literal("f"), z.literal("m")])
      .transform((val) => ({ m: "male", f: "female" }[val])),
    body: z.string(),
    name: z.string().min(5).max(50).trim().toLowerCase(),
    // address: z.string(),
  });

  type User = z.infer<typeof userSchema>;

  const user: User = {
    userId: 0,
    id: 75,
    title: "JKN",
    gender: "m",
    body: "something",
    name: "S P Balasubrahmanyam",
    // address: addressShema,
  };
  expect(() => userSchema.parse(user)).toThrow();
  const parsedUser = userSchema.safeParse(user);
  // console.dir(parsedUser.error, { depth: null });
  console.log(parsedUser.error?.flatten());
  // console.dir(parsedUser);
});
