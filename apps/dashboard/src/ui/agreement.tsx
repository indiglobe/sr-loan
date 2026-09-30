export function FullAgreementContent({
  name,
  location,
  pin,
}: Partial<{ name: string; location: string; pin: string }>) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xl rounded-2xl border border-zinc-200 dark:border-zinc-800">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">
          Partnership Agreement
        </h1>

        <p className="text-sm font-medium">
          THIS ASSOCIATE'S CHANNEL AGREEMENT is made 5/21/2026 3:36:31 PM.
        </p>

        <p>
          <strong>{name ? name : "_______________________"}</strong>, residing
          at{" "}
          <strong>
            {location
              ? location
              : "_____________________________________________"}
          </strong>{" "}
          - <strong>{pin ? pin : "______"}</strong>, hereinafter referred to as
          the <strong>"Referrer"</strong>, which expression, unless repugnant to
          the context or meaning thereof, shall be deemed to mean and include
          his/her/its heirs, legal representatives, executors, administrators,
          successors and permitted assigns (as the case may be) of the{" "}
          <strong>One Part</strong>.
        </p>

        <h3 className="text-center font-bold my-4">Between</h3>

        <p>
          <strong>M/S SRLOANSERVICE LOANS</strong> SRLOANSERVICE company
          registered office at _______________ hereinafter referred to as{" "}
          <strong>"SRLOANSERVICE LOANS"</strong> which expression, unless it be
          repugnant to the context or meaning thereof shall deem to include its
          successors and assigns of the <strong>Other Part</strong>.
        </p>

        <p>
          Referrer and SRLOANSERVICE, collectively referred to as the{" "}
          <strong>"Parties"</strong> and singularly as a{" "}
          <strong>"Party"</strong>.
        </p>

        <h2>1. Background</h2>
        <p>
          The Referrer is engaged, inter alia, in the business of sourcing
          prospective borrowers to the various lenders through their online
          platform.
        </p>
        <p>
          SRLOANSERVICE has necessary arrangement/tie up with various
          Banks/Financial Institutions/NBFCs for arranging loan/financial
          assistance/credit facility, to various Person (as defined
          hereinbelow), as per his/her/its requirement. Accordingly,
          SRLOANSERVICE has approached the Referrer to refer its clients/persons
          ('Prospects') to SRLOANSERVICE, who may be looking for a
          loan/financial assistance/credit facility from a bank/financial
          institution/NBFCs ("Purpose"). Based on the discussions had between
          the Parties, the Referrer has agreed to refer the Prospects to
          SRLOANSERVICE for the above-said Purpose for a Fee ("Referral Fee").
        </p>
        <p>
          "Person" shall mean any individual, company, firm, association, trust
          or any other organization or entity. Based on the discussions held
          between the Parties, the Parties are now desirous of entering into
          this Agreement, on the terms and conditions contained in this
          Agreement.
        </p>

        <h2>2. Referral of Prospects</h2>
        <ul>
          <li>
            The Referrer shall refer the Prospects to SRLOANSERVICE, in a manner
            and in such format, as provided in Annexure A to this Agreement. The
            manner and format in which the details of the Prospect shall be
            referred shall be mutually agreed to between the Parties.
          </li>
        </ul>

        <h2>3. Obligation of SRLOANSERVICE</h2>
        <ol type="i">
          <li>
            For all loan/financial assistance/credit facility, documentation
            including complying with the Know Your Customer ("KYC") requirement
            of the Prospect, as per Applicable Law (as defined hereinbelow) /
            statutory requirement and the requirement of the respective
            bank/financial institution/NBFC, will be complied with and completed
            by SRLOANSERVICE and/or its employees, agents etc., without any
            recourse or liability on the part of Referrer;
          </li>
          <li>
            SRLOANSERVICE shall comply with all Applicable Law to carry out its
            business operations, including labor laws as applicable to it;
          </li>
          <li>
            SRLOANSERVICE agrees and understands that the Referrer shall have no
            privity of contract with the employees, agents, contractors,
            subcontractors of SRLOANSERVICE and SRLOANSERVICE shall be solely
            liable to pay wages, other benefits to its employees, agents,
            contracts, sub-contractors;
          </li>
          <li>
            For establishing true and fair payment of the Referral Fee (as
            detailed below in clause 5) to Referrer, on the disbursed
            loan/financial assistance/credit facility, by the bank/financial
            institution/NBFC to the referred Prospect, SRLOANSERVICE shall along
            with each payment provide:
            <ul>
              <li>
                (a) the name(s) of the Prospects, whose loan/financial
                assistance/credit facility has been disbursed by the concerned
                bank/financial institution/NBFCs;
              </li>
              <li>(b) location of the Prospect;</li>
              <li>
                (c) amount of loan/financial assistance/credit facility
                approved;
              </li>
              <li>
                (d) amount of loan/financial assistance/credit facility
                disbursed/availed by the said Prospect;
              </li>
              <li>
                (e) nature of loan/financial assistance/credit facility availed
                by the Prospect;
              </li>
              <li>
                (f) name of the bank/financial institution/NBFC approving the
                said facility;
              </li>
              <li>
                (g) date of commission/fee/brokerage received by SRLOANSERVICE
                from the said bank/financial institution/NBFC, in case of each
                such Prospect; and
              </li>
              <li>
                (i) gross & net amount of Referral Fee to be paid to the
                Referrer.
              </li>
            </ul>
          </li>
        </ol>

        <p>
          <strong>"Applicable Law"</strong> means any statute, notification, bye
          law, rule and regulation, directive, guideline, ordinance, order, or
          instruction having the force of law enacted or issued by any
          Governmental Authority, whether in effect as of the date of this
          Agreement or thereafter, and shall include laws in any territorial
          jurisdiction as may be applicable.
        </p>

        <h2>4. Establishment of Joint Project Team</h2>
        <p>
          The Parties shall jointly establish a Project Team that shall be
          dedicated to the purpose of implementing this Agreement. Each Party
          shall appoint one single point of contact ("Project Team"). The
          Project Team so constituted shall review the aims, objectives, and
          activities under and in terms of this Agreement. The Parties shall
          mutually decide the modalities of functioning of the Project Team.
          Each Party shall inform the other Party of any change in the contact
          point.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Under no circumstances shall either Party be liable to the other for
          any special, indirect, incidental or consequential damages of any kind
          or nature whatsoever, arising out of or in any way related to this
          Agreement.
        </p>

        <h2>6. Confidential Information</h2>
        <p>
          Apart from the Purpose as described hereinabove, both Parties shall
          treat the information given to the other Party as strictly
          confidential. "Confidential Information" means any and all data or
          information that is of value to either Party, and is not generally
          known in the industry or to competitors, and includes, but is not
          limited to, business information, specifications, research, software,
          trade secrets, discoveries, ideas, know-how, designs, drawings, flow
          charts, data, computer programs, marketing plans, customer/Prospects
          names, budget figures, and other technical financial and business
          information concerning the disclosing party, which is disclosed by the
          disclosing party, whether directly in oral or material form to the
          other party (the "receiving party"), or indirectly, by permitting the
          receiving party to observe the conduct of the disclosing party's
          various operations or processes, but shall not include Non-Proprietary
          Information.
        </p>
        <p>
          <strong>"Non-Proprietary Information"</strong> means information that:
          (i) is within the public domain at the date of disclosure or which
          thereafter enters the public domain through no fault of the receiving
          party; or (ii) is already known to the receiving Party at the time of
          its disclosure by the disclosing party, and is not subject to
          confidentiality restrictions; or (iii) following its disclosure to the
          receiving party is received by the receiving party without an
          obligation of confidence from a third party who the receiving party
          had no reason to believe was not lawfully in possession of such
          information, free of any obligation of confidence; or (iv) is
          independently developed by the receiving party or a parent, subsidiary
          or affiliate of the receiving party without reference to or knowledge
          of the disclosing party's Confidential Information; or (v) the
          disclosing party has given its prior written approval to disclose.
        </p>

        <h2>7. Required Disclosure</h2>
        <p>
          The obligation of nondisclosure set forth above shall not apply to any
          Confidential Information that the receiving party is required to
          disclose by any Applicable Law, by any rule or regulation of any court
          or government agency of competent jurisdiction, or pursuant to legal
          process; provided, however, that the receiving party making such
          disclosure shall (a) promptly use its reasonable best efforts to limit
          such disclosure, (b) use its reasonable best efforts to provide the
          disclosing party with advance notice of any such request for
          disclosure as promptly as possible in order that the disclosing party
          may seek a protective order or such other appropriate remedy as the
          disclosing party deems necessary, and (c) in any event, make such
          disclosure only to the extent so required.
        </p>

        <h2>8. Injunctive Relief</h2>
        <p>
          The receiving party acknowledges that the improper disclosure or use
          of the Confidential Information may give rise to irreparable injury to
          the disclosing party, inadequately compensable in damages, and that,
          accordingly, the disclosing party may seek and obtain, in addition to
          any legal remedies that may be available, injunctive relief against
          the breach or threatened breach by the receiving party of any of the
          terms of this Agreement.
        </p>

        <h2>9. Relationship of the Parties</h2>
        <p>
          Nothing in this Agreement nor any acts of the Parties shall be
          construed, implied or deemed to create an agency, partnership, joint
          venture or employer and employee relationship between them. Neither
          this Agreement nor any of its provisions shall be considered or
          construed as a commitment by either Party to engage the other Party in
          any work or to purchase any products or services from the other Party.
        </p>

        <h2>10. Notices</h2>
        <p>
          Notices and other communications required or permitted pursuant to
          this Agreement shall be in writing and shall be delivered personally,
          or by prepaid registered mail, or by use of professional overnight
          courier service, to the other Party, at the addresses set forth above.
        </p>

        <h2>11. Entire Agreement</h2>
        <p>
          This Agreement contains the entire understanding between the Parties
          regarding the subject matter hereof, superseding all prior or
          contemporaneous communications, agreements, or understandings. No
          modification of the terms and conditions of this Agreement shall be
          valid and binding on the Parties unless made in writing and signed by
          an authorized representative of each of the Parties.
        </p>

        <h2>Anti-Bribery and Corruption</h2>
        <ol type="i">
          <li>
            The Referrer must not violate any Applicable Anti-Bribery Law.
          </li>
          <li>
            The Referrer has and must at all times implement adequate procedures
            designed to prevent it or any associated Person from engaging in any
            activity which would constitute an offense under the Applicable
            Anti-Bribery Law.
          </li>
          <li>
            The Referrer represents that, in connection with this Agreement, no
            improper financial or other advantage has been, will be or is agreed
            to be given to any person by or on behalf of the Referrer or its
            Associated Persons.
          </li>
          <li>
            Breach of any of the provisions in this clause or of any Applicable
            Anti-Bribery Law is a material breach of this Agreement for
            termination and, without prejudice to any other right, relief or
            remedy, entitles SRLOANSERVICE to terminate this Agreement
            immediately.
          </li>
        </ol>
        <p>
          For the foregoing provision,{" "}
          <strong>Applicable Anti-Bribery Law</strong> means any bribery, fraud,
          kickback, or other similar anti-corruption law or regulation.
        </p>
        <p>
          For the foregoing provision, <strong>Associated Person</strong> means
          any entity, a person who (by reference to all the relevant
          circumstances) performs services for or on behalf of that entity in
          any capacity, including, without limitation, employees, agents,
          subsidiaries, representatives, and subcontractors.
        </p>
        <ol type="i" start={5}>
          <li>
            It shall not knowingly enter into any communication, including but
            not limited to calls, sms or emails to any person impersonation as
            an employee or associate of any regulatory body or any other person,
            for any purpose, including to source Prospects.
          </li>
        </ol>

        <p>
          (b) The Parties agree to use all reasonable efforts to resolve any
          disputes and differences of any kind whatsoever arising out of or
          relating to this Agreement ("Disputes") expediently and amicably. If
          the Parties are unable to resolve the Disputes expediently and
          amicably within a period of 30 (thirty) days, the Parties shall give
          themselves a cooling-off period of 15 (fifteen) days and reconvene for
          an amicable resolution of the Disputes. In the event such Disputes are
          not amicably resolved for a period of 60 (sixty) days from the date
          such discussions first started, such Disputes shall be finally,
          exclusively and conclusively settled by reference to arbitration under
          the Arbitration and Conciliation Act, 1996 (as may be amended from
          time to time) and to be administered by the arbitral tribunal
          consisting of a sole arbitrator to be mutually appointed by the
          Parties. In the event the Parties are unable to agree upon an
          arbitrator, the procedure outlined in the Arbitration and Conciliation
          Act, 1996, for such appointment shall be followed. The Parties agree
          to be bound by any arbitral award or order resulting from any
          arbitration conducted hereunder. The arbitration shall take place in
          Mumbai and in the English language. The Parties shall jointly bear the
          costs of the arbitration. The courts at Mumbai shall have exclusive
          jurisdiction.
        </p>

        <h2>Other Terms & Conditions:</h2>
        <ol>
          <li>
            If the channel partner is found guilty of any kind of wrong activity
            or in the office or police station, then it will be terminated
            immediately.
          </li>
          <li>
            If a person takes a customer's kyc and other documents for the bank,
            through mail, courier, or WhatsApp, and the bank or banking
            institution catches it while doing so, SRLOANSERVICE will not be
            responsible for that. And he will have to pay the penalty kept by
            the bank at the same time. Especially for HDFC BANK, AXIS BANK, IDFC
            BANK, ICICI BANK, INDUSIND BANK, CITIBANK, Bajaj, and YES BANK. On
            doing so, it will be terminated immediately.
          </li>
          <li>
            SRLOANSERVICE doesn't have all the lenders' code directly.
            SRLOANSERVICE uses some other Corporate DSA lenders Codes.
          </li>
          <li>
            If a person is involved in any kind of wrong activity for the bank
            or commits forgery with the customer's signature or customer papers,
            so SRLOANSERVICE will not be responsible for that, and the channel
            partner will have to pay the penalty kept by the bank at the same
            time.
          </li>
        </ol>

        <hr />

        <h2 className="text-center">Agreement Declaration</h2>
        <p className="border p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800">
          <strong>
            {name ? name : "_____________"}{" "}
            {location ? location : "______________________________________"}{" "}
            {pin ? pin : "______"}
          </strong>{" "}
          hereby associate myself with SRLOANSERVICE (hereinafter referred to as
          "SRLOANSERVICE") to source files for loan disbursements. I assure that
          all documents collected from customers will be verified against the
          original documents. In case of any non-compliance, my company and I
          will be solely responsible for any penalties levied by the bank.
          SRLOANSERVICE authorized you & your team to do business in our code on
          a pan-India level.
        </p>

        <ol>
          <li>
            Payouts will be transferred to the associate account only after KYC
            and bank details are submitted.
          </li>
          <li>
            Payouts for lead sharing without documents will be reduced according
            to the payout structure.
          </li>
          <li>
            Any penalties levied by the bank for fraud reported on files sourced
            by the advisor will be borne by the advisor or their team, whoever
            is found guilty.
          </li>
          <li>TDS of 5% will be applicable on all payouts.</li>
          <li>
            18% GST only applicable when Associate crosses 2 lakh payout in a
            month.
          </li>
          <li>
            Payouts for personal loans and business loans will be made between
            the 15th and 25th of each month.
          </li>
          <li>
            Payouts for home loans, loans against property, LRD CC, and drop
            line OD will be made after SRLOANSERVICE receives the payout from
            the bank or NBFC.
          </li>
          <li>
            SRLOANSERVICE reserves the right to change its policies without
            prior notice.
          </li>
        </ol>

        <ol start={8} style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li>
            <strong>8.1</strong> If a bank or NBFC rejects any referred
            customer's loan application, SRLOANSERVICE shall not be held liable
            in any way.
          </li>
          <li>
            <strong>8.2</strong> The Referrer acknowledges that SRLOANSERVICE
            does not guarantee loan approval and cannot influence a lender's
            internal decision process.
          </li>
          <li>
            <strong>8.3</strong> SRLOANSERVICE has no direct or indirect
            "setting" or influence with any bank or NBFC for loan approvals. All
            approvals are at the sole discretion of the concerned bank or NBFC.
          </li>
        </ol>

        <ol start={9}>
          <li>
            All private funding cases and taxation services will be chargeable
            by SRLOANSERVICE.
          </li>
          <li>
            Insurance policy payouts will be made on the same schedule as
            personal loans and business loans.
          </li>
          <li>
            Demat account payouts will be made only if the opened account is
            activated.
          </li>
          <li>
            Any dispute, controversy, or claim arising out of or relating to
            this Agreement, including its interpretation, validity, or
            termination, shall be subject to the exclusive jurisdiction of the
            competent courts in [---].
          </li>
        </ol>

        <div className="mt-8">
          <p>
            <strong>Date:</strong> 5/21/2026 3:36:31 PM
          </p>
          <p>
            <strong>Place:</strong> ___________________
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-16 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <div>
            <p className="font-bold mb-12">SRLOANSERVICE</p>
            <div className="border-t border-zinc-400 pt-2 text-xs">
              Authorized Signatory
            </div>
          </div>
          <div className="text-right">
            <p className=" mb-12">
              {name ? name : "_____________________________________"}
            </p>
            <div className="border-t border-zinc-400 pt-2 text-xs">
              Referrer Signature
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
