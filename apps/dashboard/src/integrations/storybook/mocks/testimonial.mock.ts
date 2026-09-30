import type { serverFn__readAllTestimonials } from "@/integrations/server-functions/querry/testimonial.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllTestimonials() {
  return [
    {
      id: 1,
      content:
        "Perspiciatis torqueo esse nisi. Utor consequuntur vobis arx curiositas communis attero sto dedecor. Coma tutamen ascisco cuius varius.",
      authorId: "0b74cb5b8c",
      socialHandle: "Hal_Lueilwitz52",
      updatedAt: "2026-08-20 18:55:53.664000",
      createdAt: "2026-08-20 18:55:53.664000",
      tableIdentifierToken: "TMNL",
      userDetail: {
        id: "0b74cb5b8c",
        email: "adam hahn-39@email.com",
        fullName: "Adam Hahn",
        avatarUrl:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/16.jpg",
        age: 52,
        role: "basic",
        phoneNumber: "491.571.65",
        updatedAt: "2026-08-20 18:55:47.301000",
        createdAt: "2026-08-20 18:55:47.301000",
        tableIdentifierToken: "USER",
      },
    },
    {
      id: 2,
      content:
        "Anser bis cometes cras. Vesica iste uredo defendo hic sublime altus solitudo. Strues coruscus acsi vado velociter allatus.",
      authorId: "0e71bbf29c",
      socialHandle: "Candace_White44",
      updatedAt: "2026-08-20 18:55:53.664000",
      createdAt: "2026-08-20 18:55:53.664000",
      tableIdentifierToken: "TMNL",
      userDetail: {
        id: "0e71bbf29c",
        email: "alf kub-151@email.com",
        fullName: "Alf Kub",
        avatarUrl: "https://avatars.githubusercontent.com/u/61764911",
        age: 23,
        role: "basic",
        phoneNumber: "1-827-574-",
        updatedAt: "2026-08-20 18:55:47.302000",
        createdAt: "2026-08-20 18:55:47.302000",
        tableIdentifierToken: "USER",
      },
    },
    {
      id: 3,
      content:
        "Administratio vito substantia benigne accedo. Tempora vespillo sublime. Cometes territo adflicto.",
      authorId: "1fbd6dc26e",
      socialHandle: "Orin93",
      updatedAt: "2026-08-20 18:55:53.664000",
      createdAt: "2026-08-20 18:55:53.664000",
      tableIdentifierToken: "TMNL",
      userDetail: {
        id: "1fbd6dc26e",
        email: "haven rutherford-80@email.com",
        fullName: "Haven Rutherford",
        avatarUrl: "https://avatars.githubusercontent.com/u/24560401",
        age: 30,
        role: "basic",
        phoneNumber: "(524) 272-",
        updatedAt: "2026-08-20 18:55:47.301000",
        createdAt: "2026-08-20 18:55:47.301000",
        tableIdentifierToken: "USER",
      },
    },
    {
      id: 4,
      content:
        "Ulterius tamisium velociter. Aperiam voco conqueror aro cursim derelinquo. Voluptatum titulus accusamus.",
      authorId: "2b40125ac3",
      socialHandle: "Elaine.Homenick1",
      updatedAt: "2026-08-20 18:55:53.664000",
      createdAt: "2026-08-20 18:55:53.664000",
      tableIdentifierToken: "TMNL",
      userDetail: {
        id: "2b40125ac3",
        email: "arthur king-57@email.com",
        fullName: "Arthur King",
        avatarUrl:
          "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/24.jpg",
        age: 26,
        role: "basic",
        phoneNumber: "(797) 830-",
        updatedAt: "2026-08-20 18:55:47.301000",
        createdAt: "2026-08-20 18:55:47.301000",
        tableIdentifierToken: "USER",
      },
    },
  ] satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readAllTestimonials>>
  >;
}

// db
//   .select()
//   .from(testimonials)
//   .leftJoin(users,eq(users.id,testimonials.authorId))
