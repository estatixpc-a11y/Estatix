type UseAssessment = { use: string; basis: string; checks: string };
const assessments: Record<string, { intro: string; uses: UseAssessment[]; questions: [string, string][] }> = {
  'EST-VN-01': {
    intro: 'This vacant, independent building was previously occupied by a college. Its existing institutional layout provides a starting point for evaluating education, training or office occupation. Other uses require a separate conversion study.',
    uses: [
      { use: 'Education, coaching or training centre', basis: 'Previous college occupation and the room-based institutional layout are relevant starting points.', checks: 'Confirm the sanctioned use, occupancy records, classroom capacity, toilets, accessibility, fire exits, parking and any operator-specific permissions. Past occupation alone does not establish current permission.' },
      { use: 'Corporate office or back-office premises', basis: 'A whole-building acquisition may suit an organisation seeking consolidated premises.', checks: 'Assess usable floor plates, electrical capacity, data connectivity, lift provision, staff capacity, fire compliance, parking and the cost of adapting the existing layout.' },
      { use: 'Small offices or coworking space', basis: 'A room-based layout could be evaluated for smaller offices or a managed workspace.', checks: 'Test subdivision, access control, circulation, shared services, occupancy limits and letting economics against a measured plan. Independent sale of units is not assumed.' },
      { use: 'Studio apartments or serviced accommodation', basis: 'An option for an architect-led conversion assessment; suitability has not been established.', checks: 'Check permitted residential or hospitality use, change-of-use requirements, structure, daylight, ventilation, plumbing, kitchens, fire access and parking. Unit count, conversion cost and approvals remain unassessed.' },
      { use: 'Redevelopment', basis: 'An alternative to adapting the existing building, subject to the parcel and development rules.', checks: 'Reconcile title and plot boundaries, road width and setbacks, applicable development potential, restrictions, structural/demolition requirements and approval costs. No additional floor area or unit count is promised.' },
    ],
    questions: [
      ['Is this an entire building for sale in Viman Nagar?', 'Yes. This is an outright-sale opportunity for an independent building in Viman Nagar, Pune, on an owner-reported 895 sq. m. plot. Detailed documents and commercial terms are shared on enquiry.'],
      ['Can the building be used for a college, office or training centre?', 'The building was previously occupied by a college. Education, office and training uses can be evaluated against its approved plans, current permissions, condition and the operator’s requirements. None is represented here as a newly approved use.'],
      ['Can it be converted into studio apartments?', 'Studio apartments or serviced accommodation require a separate feasibility study. Conversion approval, achievable unit count and costs have not been established.'],
    ],
  },
  'EST-VN-02': {
    intro: 'The building is currently used as back-office premises, with owner-reported rent of ₹4 lakh per month. The main acquisition routes are retaining the tenancy or evaluating the building for the buyer’s own occupation.',
    uses: [
      { use: 'Retain the existing office tenancy', basis: 'Current back-office occupation and reported rent provide a starting point for investment review.', checks: 'Verify the executed lease, receipts, deposit, notice rights, escalation, responsibility for expenses and tenant covenant. Lock-in is reported to be over, so continued rent and occupancy are not assured.' },
      { use: 'Owner-occupied office or corporate back office', basis: 'The owner indicates that vacant possession may be discussed, potentially within approximately one month.', checks: 'Confirm contractual notice, tenant handover, vacant-possession terms, sanctioned use, measured usable area, building services and refurbishment costs before committing to an occupation date.' },
      { use: 'Small offices or flexible workspace', basis: 'Reconfiguration can be explored if possession and the physical layout support it.', checks: 'Prepare a measured layout and assess circulation, fire exits, accessibility, parking, services, demand and operating costs. The number of offices and achievable rents are not established.' },
      { use: 'Conversion or redevelopment', basis: 'An option for separate technical and commercial review rather than a confirmed entitlement.', checks: 'First reconcile the differing plot areas in the supplied records. Review title, approved plans, current development rules, existing lease obligations and a complete cost and approval programme. Proposed drawings are not proof of sanctioned or existing construction.' },
    ],
    questions: [
      ['Is this a pre-leased commercial property opportunity in Pune?', 'It is an existing leased back-office building in Viman Nagar with owner-reported rent of ₹4 lakh per month. Buyers should verify the permitted use, lease and rent records. The lock-in has ended; income continuity is not guaranteed.'],
      ['Can I acquire the building for my own office?', 'The owner is open to discussing vacant possession as well as a sale with the tenancy. Timing depends on lease terms, notice and actual tenant handover.'],
      ['What rental return will the investment provide?', 'A return assessment requires the negotiated acquisition price, transaction costs, lease terms, recurring expenses, vacancy assumptions and capital expenditure. The listing does not publish an assured yield or return.'],
    ],
  },
};

export function PropertyFeasibility({ reference, onRequest }: { reference: string; onRequest: () => void }) {
  const assessment = assessments[reference];
  if (!assessment) return null;
  return <section id="feasibility" className="mt-14 border-t border-slate-200 pt-10">
    <p className="text-xs uppercase tracking-widest text-teal-700 mb-3">Potential uses & acquisition planning</p>
    <h2 className="text-3xl font-semibold text-teal-950">Preliminary building-use feasibility</h2>
    <p className="text-slate-600 leading-relaxed mt-5 max-w-4xl">{assessment.intro}</p>
    <div className="mt-6 p-5 rounded-lg border border-amber-200 bg-amber-50 text-sm text-slate-700 leading-relaxed"><strong>Initial assessment, not an approved-use certificate.</strong> Based on supplied information and owner statements, reviewed on 19 October 2026. A site inspection, structural audit, independent document verification and costed conversion study have not been completed as part of this listing. The options below are for evaluation, subject to applicable permissions.</div>
    <div className="grid md:grid-cols-2 gap-5 mt-8">{assessment.uses.map(item => <article key={item.use} className="p-6 rounded-xl border border-slate-200">
      <h3 className="text-xl font-semibold text-teal-950">{item.use}</h3>
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">{item.basis}</p>
      <p className="mt-4 text-xs uppercase tracking-wider font-semibold text-teal-800">Checks before confirming suitability</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.checks}</p>
    </article>)}</div>
    <div className="mt-8 p-6 sm:p-8 bg-teal-950 text-white rounded-xl">
      <h3 className="text-2xl font-semibold">Evaluate the building for your intended use</h3>
      <p className="mt-4 text-slate-300 leading-relaxed">Share your proposed use, capacity, budget and timeline. Estatix can discuss the scope of a detailed review with the relevant architectural, legal and technical specialists.</p>
      <ul className="list-disc pl-5 mt-5 space-y-2 text-sm text-slate-300"><li>Measured usable area, layout options and permission checks.</li><li>Acquisition, refurbishment, services and approval cost assumptions.</li><li>Operating costs, rental or business-income scenarios and vacancy sensitivity.</li><li>Implementation timeline, contingencies and unresolved risks.</li></ul>
      <p className="text-xs text-slate-400 mt-5">Detailed scope, fees and delivery dates are agreed separately. No conversion budget, rental projection or ROI is established by this preliminary assessment.</p>
      <button onClick={onRequest} className="mt-6 px-6 py-3 rounded-lg bg-brand-accent text-teal-950 font-semibold">Request a Use-Specific Feasibility Review</button>
    </div>
    <section className="mt-12" aria-label="Property questions"><h2 className="text-2xl font-semibold text-teal-950 mb-6">Questions about this Viman Nagar building</h2><div className="space-y-4">{assessment.questions.map(([question, answer]) => <details key={question} className="border border-slate-200 rounded-lg p-5"><summary className="cursor-pointer font-semibold text-teal-950">{question}</summary><p className="mt-4 text-slate-600 text-sm leading-relaxed">{answer}</p></details>)}</div></section>
  </section>;
}
