import type { serverFn__readAllContactSubmissions } from "@/integrations/server-functions/querry/contact-submission.sa";
import type { DeepPartial } from "@/utils/types/storybook";

export function mocked__serverFn__readAllContactSubmissions() {
  return [
    {
      id: 1,
      firstName: "Viva",
      lastName: "Yundt",
      email: "viva-yundt@example.com",
      phoneNumber: "9999999999",
      message:
        "Claro conculco comitatus sursum torqueo acerbitas. Audio adamo laboriosam clarus tenetur verbum. Admiratio vacuus nam tracto.",
      isVerified: true,
      updatedAt: "2026-08-20 18:55:54.211000",
      createdAt: "2026-08-20 18:55:54.211000",
      tableIdentifierToken: "CONT",
    },
    {
      id: 2,
      firstName: "Jaime",
      lastName: "Lind",
      email: "jaime-lind@example.com",
      phoneNumber: "9999999999",
      message:
        "Totidem admoveo ab anser usitas abeo iusto absconditus tamisium. Angelus tabernus absorbeo tabesco artificiose. Caries desolo vesica arx denuo vacuus audio.",
      isVerified: true,
      updatedAt: "2026-08-20 18:55:54.211000",
      createdAt: "2026-08-20 18:55:54.211000",
      tableIdentifierToken: "CONT",
    },
    {
      id: 3,
      firstName: "Terrence",
      lastName: "Schultz",
      email: "terrence-schultz@example.com",
      phoneNumber: "9999999999",
      message:
        "Trucido vere assumenda vesco. Tamquam rerum colligo accommodo chirographum sulum sequi. Cohaero ver deleo tametsi volutabrum.",
      isVerified: false,
      updatedAt: "2026-08-20 18:55:54.211000",
      createdAt: "2026-08-20 18:55:54.211000",
      tableIdentifierToken: "CONT",
    },
    {
      id: 4,
      firstName: "Ronny",
      lastName: "Walker",
      email: "ronny-walker@example.com",
      phoneNumber: "9999999999",
      message:
        "Pax tamen sub vox vacuus accusator. Deduco cunctatio tabula somniculosus terebro artificiose. Nulla decor theologus tunc conturbo adopto tendo toties amaritudo quasi.",
      isVerified: false,
      updatedAt: "2026-08-20 18:55:54.211000",
      createdAt: "2026-08-20 18:55:54.211000",
      tableIdentifierToken: "CONT",
    },
  ] satisfies DeepPartial<
    Awaited<ReturnType<typeof serverFn__readAllContactSubmissions>>
  >;
}

// db
//   .select()
//   .from(contactSubmissions)
