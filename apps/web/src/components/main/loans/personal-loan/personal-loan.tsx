import { useState } from "react";

import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  DollarSign,
  UserCheck,
  TrendingUp,
  FileText,
  Phone,
  Award,
  ChevronRight,
  ArrowLeft,
  Search,
  Building2,
  Percent,
  X,
} from "lucide-react";
import {
  useLoaderData,
  useNavigate,
  useRouter,
  useSearch,
  Link,
} from "@tanstack/react-router";
import { cn } from "@repo/styles/cn";

export function PersonalLoan() {
  const { banksLoanData } = useLoaderData({ from: "/loans/personal-loan/" });

  const { "bank-name": bankName } = useSearch({
    from: "/loans/personal-loan/",
  });

  const [searchQuery, setSearchQuery] = useState(bankName ?? "");

  const navigate = useNavigate();

  function filterBanks(filteringToken: string) {
    setSearchQuery(filteringToken);

    if (filteringToken === "") {
      return navigate({
        to: ".",

        search: (prev) => {
          delete prev["bank-name"];

          return {
            ...prev,
          };
        },

        resetScroll: false,
      });
    }

    return navigate({
      to: ".",

      search: (prev) => ({
        ...prev,

        "bank-name": filteringToken,
      }),

      resetScroll: false,
    });
  }

  const filteredBanks = banksLoanData.filter(
    (bank) =>
      bank.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="space-y-6">
        {/* Search Bar & Stats */}

        <div
          className={cn(
            "2xs:px-5 mx-auto mt-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8",
          )}
        >
          <div
            className={cn(
              "flex flex-col gap-4 rounded-2xl border border-stone-800 bg-stone-900/60 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between",
            )}
          >
            <div className={cn("relative w-full sm:w-96")}>
              <Search
                className={cn(
                  "pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-stone-400",
                )}
              />

              <input
                type="text"
                placeholder="Search bank name or loan type..."
                value={searchQuery}
                onChange={(e) => filterBanks(e.target.value)}
                className={cn(
                  "w-full rounded-xl border border-stone-800 bg-stone-950 py-3 pr-11 pl-11 text-sm text-stone-100 transition placeholder:text-stone-500 focus:border-amber-500 focus:outline-none",
                )}
              />

              <button
                type="button"
                className={cn(
                  "absolute top-1/2 right-3.5 -translate-y-1/2 text-stone-400 transition hover:text-white",
                )}
                onClick={() => filterBanks("")}
              >
                <X className={cn("size-5")} />
              </button>
            </div>

            <div className={cn("text-sm font-medium text-stone-400")}>
              Showing{" "}
              <span className={cn("font-bold text-amber-400")}>
                {filteredBanks.length}
              </span>{" "}
              Partner Banks
            </div>
          </div>
        </div>

        {/* Banks Grid */}

        <div
          className={cn(
            "2xs:px-5 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8",
          )}
        >
          {filteredBanks.map((bank) => (
            <div
              key={bank.id}
              className="relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10"></div>

              <Link
                to="/loans/personal-loan/$bankId"
                params={{ bankId: bank.id }}
              >
                {/* Bank Top Tag */}

                <div className="mb-5 flex items-start gap-3">
                  <span
                    className={cn(
                      "flex-1 rounded-2xl border border-stone-800 bg-stone-950 px-4 py-2.5 text-2.75 leading-4 font-medium tracking-[0.12em] text-amber-400 uppercase",
                    )}
                  >
                    {bank.tagline}
                  </span>

                  <div
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl border border-stone-800 bg-stone-950",
                    )}
                  >
                    <Building2
                      className={cn(
                        "size-4 text-stone-500 transition group-hover:text-amber-400",
                      )}
                    />
                  </div>
                </div>

                <h3 className="mb-1 text-2xl font-black text-white transition group-hover:text-amber-400">
                  {bank.bankName}
                </h3>

                <p className="mb-6 text-xs font-medium tracking-wide text-stone-400 uppercase">
                  {bank.productName}
                </p>

                {/* Highlights Grid */}

                <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-4">
                  <div>
                    <div className="text-xs text-stone-400">Interest Rate</div>

                    <div className="text-sm font-bold text-amber-400">
                      {bank.roiStarting}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Max Amount</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.maxAmount}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Max Tenure</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.maxTenure}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Disbursal</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.processingTime}
                    </div>
                  </div>
                </div>
              </Link>

              <div className="@container">
                <div
                  className={cn("grid grid-cols-1 gap-3 py-4 @sm:grid-cols-2")}
                >
                  {/* View Eligibility */}

                  <Link
                    to="/loans/personal-loan/$bankId"
                    params={{ bankId: bank.id }}
                    type="button"
                    className={cn(
                      "group border-primary-400 text-primary-400 hover:bg-primary-400 flex w-full items-center justify-center gap-2 rounded-md border bg-transparent px-4 py-3 text-xs font-semibold transition duration-300 hover:text-stone-950",
                    )}
                  >
                    <span>View Eligibility & Docs</span>

                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  {/* Apply Now */}

                  <a
                    href={bank.applyLink}
                    className={cn(
                      "group border-primary-400 bg-primary-500 hover:border-primary-300 hover:bg-primary-300 flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-xs font-bold text-stone-950 transition duration-300",
                    )}
                  >
                    <span>Apply Now</span>

                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <div className="rounded-3xl border border-stone-800 bg-stone-900/40 py-16 text-center">
            <p className="text-lg text-stone-400">
              No banks found matching your search query.
            </p>

            <button
              onClick={() => setSearchQuery("")}
              className="bg-primary-500 mt-4 rounded-xl px-4 py-2 text-sm font-bold text-stone-950"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </>
  );
}

// export function App() {

//   const { banksLoanData } = useLoaderData({ from: "/loans/personal-loan/" });

//   const { "bank-name": bankName } = useSearch({

//     from: "/loans/personal-loan/",

//   });

//   const [selectedBankId, setSelectedBankId] = useState<string | null>(null);

//   const [searchQuery, setSearchQuery] = useState(bankName ?? "");

//   const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

//   const navigate = useNavigate();

//   function filterBanks(filteringToken: string) {

//     setSearchQuery(filteringToken);

//     if (filteringToken === "") {

//       return navigate({

//         to: ".",

//         search: (prev) => {

//           delete prev["bank-name"];

//           return {

//             ...prev,

//           };

//         },

//         resetScroll: false,

//       });

//     }

//     return navigate({

//       to: ".",

//       search: (prev) => ({

//         ...prev,

//         "bank-name": filteringToken,

//       }),

//       resetScroll: false,

//     });

//   }

//   const handleCopyPhone = (phone: string) => {

//     navigator.clipboard.writeText(phone);

//     setCopiedPhone(phone);

//     setTimeout(() => setCopiedPhone(null), 2000);

//   };

//   const selectedBank = banksLoanData.find((b) => b.id === selectedBankId);

//   const filteredBanks = banksLoanData.filter(

//     (bank) =>

//       bank.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||

//       bank.productName.toLowerCase().includes(searchQuery.toLowerCase()),

//   );

//   return (

//     <div className="from-background bg-linear-to-br via-stone-900 to-amber-950 pt-12 font-sans text-stone-100">

//       <div className="space-y-8">

//         {/* CONDITIONAL VIEW: Dashboard List or Detailed Bank View */}

//         {!selectedBank ? (

//           <div className="space-y-6">

//             {/* Search Bar & Stats */}

//             <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-stone-800 bg-stone-900/60 p-4 backdrop-blur sm:flex-row">

//               <div className="relative w-full sm:w-96">

//                 <Search className="absolute top-3 left-3.5 h-5 w-5 text-stone-400" />

//                 <input

//                   type="text"

//                   placeholder="Search bank name or loan type..."

//                   value={searchQuery}

//                   onChange={(e) => filterBanks(e.target.value)}

//                   className="w-full rounded-xl border border-stone-800 bg-stone-950 px-11 py-2.5 text-sm text-stone-100 placeholder-stone-500 transition focus:border-amber-500 focus:outline-none"

//                 />

//                 <button

//                   type="button"

//                   className="absolute top-1/2 right-3.5 h-5 w-5 -translate-y-1/2 text-stone-400"

//                   onClick={() => filterBanks("")}

//                 >

//                   <X className={cn(`h-5 w-5`)} />

//                 </button>

//               </div>

//               <div className="text-sm font-medium text-stone-400">

//                 Showing{" "}

//                 <span className="font-bold text-amber-400">

//                   {filteredBanks.length}

//                 </span>{" "}

//                 Partner Banks

//               </div>

//             </div>

//             {/* Banks Grid */}

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

//               {filteredBanks.map((bank) => (

//                 <div

//                   key={bank.id}

//                   className="relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60"

//                 >

//                   <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10"></div>

//                   <div>

//                     {/* Bank Top Tag */}

//                     <div className="mb-4 flex items-center justify-between">

//                       <span className="rounded-full border border-stone-800 bg-stone-950 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">

//                         {bank.tagline}

//                       </span>

//                       <Building2 className="h-5 w-5 text-stone-500 transition group-hover:text-amber-400" />

//                     </div>

//                     <h3 className="mb-1 text-2xl font-black text-white transition group-hover:text-amber-400">

//                       {bank.bankName}

//                     </h3>

//                     <p className="mb-6 text-xs font-medium tracking-wide text-stone-400 uppercase">

//                       {bank.productName}

//                     </p>

//                     {/* Highlights Grid */}

//                     <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-4">

//                       <div>

//                         <div className="text-xs text-stone-400">

//                           Interest Rate

//                         </div>

//                         <div className="text-sm font-bold text-amber-400">

//                           {bank.roiStarting}

//                         </div>

//                       </div>

//                       <div>

//                         <div className="text-xs text-stone-400">Max Amount</div>

//                         <div className="text-sm font-bold text-stone-100">

//                           {bank.maxAmount}

//                         </div>

//                       </div>

//                       <div>

//                         <div className="text-xs text-stone-400">Max Tenure</div>

//                         <div className="text-sm font-bold text-stone-100">

//                           {bank.maxTenure}

//                         </div>

//                       </div>

//                       <div>

//                         <div className="text-xs text-stone-400">Disbursal</div>

//                         <div className="text-sm font-bold text-stone-100">

//                           {bank.processingTime}

//                         </div>

//                       </div>

//                     </div>

//                   </div>

//                   <div className={cn(`space-y-3 py-4`)}>

//                     <div

//                       className="group flex items-center justify-between"

//                       onClick={() => setSelectedBankId(bank.id)}

//                     >

//                       <span className="text-xs font-semibold text-stone-300 transition group-hover:text-amber-400">

//                         View Eligibility & Docs

//                       </span>

//                       <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-stone-950">

//                         <ChevronRight className="h-4 w-4" />

//                       </div>

//                     </div>

//                     <a

//                       href={bank.applyLink}

//                       className="group flex items-center justify-between"

//                     >

//                       <span className="text-xs font-semibold text-stone-300 transition group-hover:text-amber-400">

//                         Apply Now

//                       </span>

//                       <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-stone-950">

//                         <ChevronRight className="h-4 w-4" />

//                       </div>

//                     </a>

//                   </div>

//                 </div>

//               ))}

//             </div>

//             {filteredBanks.length === 0 && (

//               <div className="rounded-3xl border border-stone-800 bg-stone-900/40 py-16 text-center">

//                 <p className="text-lg text-stone-400">

//                   No banks found matching your search query.

//                 </p>

//                 <button

//                   onClick={() => setSearchQuery("")}

//                   className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950"

//                 >

//                   Reset Search

//                 </button>

//               </div>

//             )}

//           </div>

//         ) : (

//           /* DETAILED BANK VIEW (Simulated Page / Modal Detail) */

//           <div className="animate-fadeIn space-y-6">

//             {/* Back Button */}

//             <button

//               onClick={() => setSelectedBankId(null)}

//               className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-300 transition hover:border-amber-500/50 hover:text-amber-400"

//             >

//               <ArrowLeft className="h-4 w-4" />

//               <span>Back to All Banks Dashboard</span>

//             </button>

//             {/* Bank Detail Header Banner */}

//             <div

//               className={`bg-linear-to-r ${selectedBank.logoBg} relative overflow-hidden rounded-3xl border border-amber-500/40 p-6 shadow-2xl sm:p-10`}

//             >

//               <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

//               <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

//                 <div className="space-y-3">

//                   <div className="flex items-center gap-3">

//                     <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold tracking-wider text-stone-950 uppercase shadow-md">

//                       {selectedBank.tagline}

//                     </span>

//                     <span className="text-sm text-stone-300">

//                       Verified Loan Scheme

//                     </span>

//                   </div>

//                   <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">

//                     {selectedBank.bankName}{" "}

//                     <span className="font-serif text-amber-400 italic">

//                       {selectedBank.productName}

//                     </span>

//                   </h2>

//                   <p className="text-lg font-medium text-stone-200 sm:text-2xl">

//                     ROI Starting from{" "}

//                     <span className="font-bold text-amber-400 underline decoration-amber-500/50">

//                       {selectedBank.roiStarting}

//                     </span>

//                   </p>

//                   <a

//                     href={selectedBank.applyLink}

//                     className={cn(

//                       `flex max-w-max cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 shadow transition-all hover:bg-amber-400`,

//                     )}

//                   >

//                     Apply Now

//                   </a>

//                 </div>

//                 <div className="min-w-70 rounded-2xl border border-stone-700 bg-stone-950/80 p-6 text-center shadow-inner sm:text-left">

//                   <div className="mb-1 text-xs font-semibold tracking-widest text-stone-300 uppercase">

//                     Instant Support

//                   </div>

//                   <div className="mb-2 text-xl font-bold text-white">

//                     Speak to Advisor

//                   </div>

//                   <p className="mb-4 text-xs text-stone-300">

//                     Fast processing via SR Loan Services.

//                   </p>

//                   <div className="flex flex-col gap-2">

//                     {selectedBank.contactNumbers.map((phone) => (

//                       <button

//                         key={phone}

//                         onClick={() => handleCopyPhone(phone)}

//                         className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 shadow transition-all hover:bg-amber-400"

//                       >

//                         <Phone className="h-4 w-4" />

//                         <span>{phone}</span>

//                         {copiedPhone === phone && (

//                           <span className="ml-2 rounded bg-stone-950 px-1.5 py-0.5 text-xs font-normal text-amber-400">

//                             Copied!

//                           </span>

//                         )}

//                       </button>

//                     ))}

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* Three Pillar Cards: Benefits, Eligibility, Required Documents */}

//             <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

//               {/* Benefits Section */}

//               <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">

//                 <div>

//                   <div className="mb-6 flex items-center justify-between">

//                     <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">

//                       <Award className="h-7 w-7 text-amber-500" /> Benefits

//                     </h3>

//                     <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">

//                       Perks

//                     </span>

//                   </div>

//                   <ul className="space-y-4">

//                     {selectedBank.benefits.map((benefit) => (

//                       <li

//                         key={benefit.id}

//                         className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"

//                       >

//                         <div className="mt-0.5 rounded-xl bg-amber-500/10 p-2">

//                           {renderIcon(benefit.iconName)}

//                         </div>

//                         <div>

//                           <h4 className="text-base font-bold text-stone-100">

//                             {benefit.title}

//                           </h4>

//                           <p className="mt-0.5 text-sm text-stone-400">

//                             {benefit.description}

//                           </p>

//                         </div>

//                       </li>

//                     ))}

//                   </ul>

//                 </div>

//                 <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">

//                   <span>Max Limit: {selectedBank.maxAmount}</span>

//                   <span className="font-semibold text-amber-400">

//                     {selectedBank.processingTime}

//                   </span>

//                 </div>

//               </div>

//               {/* Eligibility Section */}

//               <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">

//                 <div>

//                   <div className="mb-6 flex items-center justify-between">

//                     <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">

//                       <UserCheck className="h-7 w-7 text-amber-500" />{" "}

//                       Eligibility

//                     </h3>

//                     <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">

//                       Criteria

//                     </span>

//                   </div>

//                   <ul className="space-y-4">

//                     {selectedBank.eligibility.map((item) => (

//                       <li

//                         key={item.id}

//                         className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"

//                       >

//                         <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-stone-950">

//                           ✓

//                         </div>

//                         <div>

//                           <h4 className="text-base font-bold text-stone-100">

//                             {item.requirement}

//                           </h4>

//                           <p className="mt-0.5 text-sm text-stone-400">

//                             {item.detail}

//                           </p>

//                         </div>

//                       </li>

//                     ))}

//                   </ul>

//                 </div>

//                 <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">

//                   <span>Tenure: {selectedBank.maxTenure}</span>

//                   <span className="font-semibold text-amber-400">

//                     Salaried / Self-Employed

//                   </span>

//                 </div>

//               </div>

//               {/* Required Documents Section */}

//               <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">

//                 <div>

//                   <div className="mb-6 flex items-center justify-between">

//                     <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">

//                       <FileText className="h-7 w-7 text-amber-500" /> Documents

//                     </h3>

//                     <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">

//                       Checklist

//                     </span>

//                   </div>

//                   <ul className="space-y-4">

//                     {selectedBank.requiredDocuments.map((doc) => (

//                       <li

//                         key={doc.id}

//                         className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"

//                       >

//                         <div className="mt-0.5 rounded-xl bg-amber-500/10 p-2 text-amber-400">

//                           <FileText className="h-5 w-5" />

//                         </div>

//                         <div>

//                           <h4 className="text-base font-bold text-stone-100">

//                             {doc.documentName}

//                           </h4>

//                           <p className="mt-0.5 text-xs font-medium tracking-wide text-amber-500/80 uppercase">

//                             {doc.category}

//                           </p>

//                         </div>

//                       </li>

//                     ))}

//                   </ul>

//                 </div>

//                 <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">

//                   <span>Digital Upload</span>

//                   <span className="font-semibold text-amber-400">

//                     Fast Verification

//                   </span>

//                 </div>

//               </div>

//             </div>

//             {/* Bottom Call to Action Footer */}

//             <footer className="space-y-6 rounded-3xl border border-amber-500/40 bg-linear-to-r from-stone-900 via-amber-950 to-stone-900 p-8 text-center shadow-2xl">

//               <div className="mx-auto max-w-2xl space-y-2">

//                 <h3 className="font-serif text-xl font-bold text-white italic sm:text-2xl">

//                   Ready to apply for {selectedBank.bankName}{" "}

//                   {selectedBank.productName}?

//                 </h3>

//                 <p className="text-sm text-stone-300 sm:text-base">

//                   Connect with our authorized loan experts to get best-in-market

//                   rates and zero hassle processing.

//                 </p>

//               </div>

//               <div className="flex flex-wrap items-center justify-center gap-4 pt-2">

//                 {selectedBank.contactNumbers.map((phone) => (

//                   <a

//                     key={phone}

//                     href={`tel:${phone}`}

//                     className="flex transform items-center gap-3 rounded-2xl bg-amber-500 px-6 py-3.5 text-base font-extrabold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-500/20 sm:text-lg"

//                   >

//                     <Phone className="h-5 w-5" />

//                     <span>Call: {phone}</span>

//                     <ChevronRight className="ml-1 h-4 w-4" />

//                   </a>

//                 ))}

//               </div>

//             </footer>

//           </div>

//         )}

//       </div>

//     </div>

//   );

// }

export function PersonalLoanSeparated() {
  const { banksLoanData } = useLoaderData({ from: "/loans/personal-loan/" });

  const { "bank-name": bankName } = useSearch({
    from: "/loans/personal-loan/",
  });

  const [searchQuery, setSearchQuery] = useState(bankName ?? "");

  const navigate = useNavigate();

  function filterBanks(filteringToken: string) {
    setSearchQuery(filteringToken);

    if (filteringToken === "") {
      return navigate({
        to: ".",

        search: (prev) => {
          delete prev["bank-name"];

          return {
            ...prev,
          };
        },

        resetScroll: false,
      });
    }

    return navigate({
      to: ".",

      search: (prev) => ({
        ...prev,

        "bank-name": filteringToken,
      }),

      resetScroll: false,
    });
  }

  const filteredBanks = banksLoanData.filter(
    (bank) =>
      bank.bankName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <div className="space-y-6">
        {/* Search Bar & Stats */}

        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-stone-800 bg-stone-900/60 p-4 backdrop-blur sm:flex-row">
          <div className="relative w-full sm:w-96">
            <Search className="absolute top-3 left-3.5 h-5 w-5 text-stone-400" />

            <input
              type="text"
              placeholder="Search bank name or loan type..."
              value={searchQuery}
              onChange={(e) => filterBanks(e.target.value)}
              className="w-full rounded-xl border border-stone-800 bg-stone-950 px-11 py-2.5 text-sm text-stone-100 placeholder-stone-500 transition focus:border-amber-500 focus:outline-none"
            />

            <button
              type="button"
              className="absolute top-1/2 right-3.5 h-5 w-5 -translate-y-1/2 text-stone-400"
              onClick={() => filterBanks("")}
            >
              <X className={cn(`h-5 w-5`)} />
            </button>
          </div>

          <div className="text-sm font-medium text-stone-400">
            Showing{" "}
            <span className="font-bold text-amber-400">
              {filteredBanks.length}
            </span>{" "}
            Partner Banks
          </div>
        </div>

        {/* Banks Grid */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBanks.map((bank) => (
            <div
              key={bank.id}
              className="relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/90 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-500/5 blur-2xl transition group-hover:bg-amber-500/10"></div>

              <div>
                {/* Bank Top Tag */}

                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-stone-800 bg-stone-950 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">
                    {bank.tagline}
                  </span>

                  <Building2 className="h-5 w-5 text-stone-500 transition group-hover:text-amber-400" />
                </div>

                <h3 className="mb-1 text-2xl font-black text-white transition group-hover:text-amber-400">
                  {bank.bankName}
                </h3>

                <p className="mb-6 text-xs font-medium tracking-wide text-stone-400 uppercase">
                  {bank.productName}
                </p>

                {/* Highlights Grid */}

                <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl border border-stone-800/80 bg-stone-950/60 p-4">
                  <div>
                    <div className="text-xs text-stone-400">Interest Rate</div>

                    <div className="text-sm font-bold text-amber-400">
                      {bank.roiStarting}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Max Amount</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.maxAmount}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Max Tenure</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.maxTenure}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-stone-400">Disbursal</div>

                    <div className="text-sm font-bold text-stone-100">
                      {bank.processingTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className={cn(`space-y-3 py-4`)}>
                <div className="group flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-300 transition group-hover:text-amber-400">
                    View Eligibility & Docs
                  </span>

                  <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-stone-950">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>

                <a
                  href={bank.applyLink}
                  className="group flex items-center justify-between"
                >
                  <span className="text-xs font-semibold text-stone-300 transition group-hover:text-amber-400">
                    Apply Now
                  </span>

                  <div className="rounded-xl bg-amber-500/10 p-2 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-stone-950">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <div className="rounded-3xl border border-stone-800 bg-stone-900/40 py-16 text-center">
            <p className="text-lg text-stone-400">
              No banks found matching your search query.
            </p>

            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export function IndividualPersonalLoan() {
  const router = useRouter();

  const { bankDetails: selectedBank } = useLoaderData({
    from: "/loans/personal-loan/$bankId/",
  });

  return (
    <div className="animate-fadeIn space-y-6">
      {/* Back Button */}

      <button
        onClick={() => router.history.back()}
        className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-stone-800 bg-stone-900 px-4 py-2.5 text-sm font-semibold text-stone-300 transition hover:border-amber-500/50 hover:text-amber-400"
      >
        <ArrowLeft className="h-4 w-4" />

        <span>Back to All Banks Dashboard</span>
      </button>

      {/* Bank Detail Header Banner */}

      <div
        className={`bg-linear-to-r ${selectedBank.logoBg} relative overflow-hidden rounded-3xl border border-amber-500/40 p-6 shadow-2xl sm:p-10`}
      >
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold tracking-wider text-stone-950 uppercase shadow-md">
                {selectedBank.tagline}
              </span>

              <span className="text-sm text-stone-300">
                Verified Loan Scheme
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              {selectedBank.bankName}{" "}
              <span className="font-serif text-amber-400 italic">
                {selectedBank.productName}
              </span>
            </h2>

            <p className="text-lg font-medium text-stone-200 sm:text-2xl">
              ROI Starting from{" "}
              <span className="font-bold text-amber-400 underline decoration-amber-500/50">
                {selectedBank.roiStarting}
              </span>
            </p>

            <a
              href={selectedBank.applyLink}
              className={cn(
                `flex max-w-max cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 shadow transition-all hover:bg-amber-400`,
              )}
            >
              Apply Now
            </a>
          </div>

          <div className="min-w-70 rounded-2xl border border-stone-700 bg-stone-950/80 p-6 text-center shadow-inner sm:text-left">
            <div className="mb-1 text-xs font-semibold tracking-widest text-stone-300 uppercase">
              Instant Support
            </div>

            <div className="mb-2 text-xl font-bold text-white">
              Speak to Advisor
            </div>

            <p className="mb-4 text-xs text-stone-300">
              Fast processing via SR Loan Services.
            </p>

            <div className="flex flex-col gap-2">
              {selectedBank.contactNumbers.map((phone) => (
                <a
                  href={`tel:+91${phone}`}
                  key={phone}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 shadow transition-all hover:bg-amber-400"
                >
                  <Phone className="h-4 w-4" />

                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillar Cards: Benefits, Eligibility, Required Documents */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Benefits Section */}

        <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">
                <Award className="h-7 w-7 text-amber-500" /> Benefits
              </h3>

              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">
                Perks
              </span>
            </div>

            <ul className="space-y-4">
              {selectedBank.benefits.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"
                >
                  <div className="mt-0.5 rounded-xl bg-amber-500/10 p-2">
                    {renderIcon(benefit.iconName)}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-stone-100">
                      {benefit.title}
                    </h4>

                    <p className="mt-0.5 text-sm text-stone-400">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">
            <span>Max Limit: {selectedBank.maxAmount}</span>

            <span className="font-semibold text-amber-400">
              {selectedBank.processingTime}
            </span>
          </div>
        </div>

        {/* Eligibility Section */}

        <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">
                <UserCheck className="h-7 w-7 text-amber-500" /> Eligibility
              </h3>

              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">
                Criteria
              </span>
            </div>

            <ul className="space-y-4">
              {selectedBank.eligibility.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-stone-950">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-stone-100">
                      {item.requirement}
                    </h4>

                    <p className="mt-0.5 text-sm text-stone-400">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">
            <span>Tenure: {selectedBank.maxTenure}</span>

            <span className="font-semibold text-amber-400">
              Salaried / Self-Employed
            </span>
          </div>
        </div>

        {/* Required Documents Section */}

        <div className="flex flex-col justify-between rounded-3xl border border-amber-500/30 bg-stone-900/90 p-6 shadow-xl sm:p-8">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-serif text-2xl font-bold text-amber-400 italic">
                <FileText className="h-7 w-7 text-amber-500" /> Documents
              </h3>

              <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs tracking-widest text-amber-400 uppercase">
                Checklist
              </span>
            </div>

            <ul className="space-y-4">
              {selectedBank.requiredDocuments.map((doc) => (
                <li
                  key={doc.id}
                  className="flex items-start gap-3 rounded-2xl border border-stone-800 bg-stone-950/60 p-4"
                >
                  <div className="mt-0.5 rounded-xl bg-amber-500/10 p-2 text-amber-400">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-stone-100">
                      {doc.documentName}
                    </h4>

                    <p className="mt-0.5 text-xs font-medium tracking-wide text-amber-500/80 uppercase">
                      {doc.category}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-400">
            <span>Digital Upload</span>

            <span className="font-semibold text-amber-400">
              Fast Verification
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Call to Action Footer */}

      <footer className="space-y-6 rounded-3xl border border-amber-500/40 bg-linear-to-r from-stone-900 via-amber-950 to-stone-900 p-8 text-center shadow-2xl">
        <div className="mx-auto max-w-2xl space-y-2">
          <h3 className="font-serif text-xl font-bold text-white italic sm:text-2xl">
            Ready to apply for {selectedBank.bankName}{" "}
            {selectedBank.productName}?
          </h3>

          <p className="text-sm text-stone-300 sm:text-base">
            Connect with our authorized loan experts to get best-in-market rates
            and zero hassle processing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {selectedBank.contactNumbers.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone}`}
              className="flex transform items-center gap-3 rounded-2xl bg-amber-500 px-6 py-3.5 text-base font-extrabold text-stone-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-500/20 sm:text-lg"
            >
              <Phone className="h-5 w-5" />

              <span>Call: {phone}</span>

              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function renderIcon(name: string) {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className="h-5 w-5 text-amber-700" />;

    case "Clock":
      return <Clock className="h-5 w-5 text-amber-700" />;

    case "DollarSign":
      return <DollarSign className="h-5 w-5 text-amber-700" />;

    case "Calendar":
      return <Calendar className="h-5 w-5 text-amber-700" />;

    case "TrendingUp":
      return <TrendingUp className="h-5 w-5 text-amber-700" />;

    case "Percent":
      return <Percent className="h-5 w-5 text-amber-700" />;

    case "Award":
      return <Award className="h-5 w-5 text-amber-700" />;

    case "UserCheck":
      return <UserCheck className="h-5 w-5 text-amber-700" />;

    default:
      return <CheckCircle2 className="h-5 w-5 text-amber-700" />;
  }
}
