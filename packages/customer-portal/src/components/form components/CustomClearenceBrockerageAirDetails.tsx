import SelectComponet from "./SelectComponent"
import TextField from "./TextField"

function CustomClearenceBrockerageAirDetails({prefix}) {
  return (
    <>
        <h2 className="col-span-3">Upload Sea Rates</h2>
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.portOfClearence`} title={"Port Of Clearence"} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.commodity`} title={"Commodity"} />
    <SelectComponet options={[1,2,3,4]} id={`${prefix}.clearenceType`} title={"Clearence Type"} />
    <TextField id={`${prefix}.customClearenceCharges`} title={"Custom Clearence Charges"} type={"number"} />
    <hr className="my-12 h-0.5 col-span-3 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    <h2 className="col-span-3">Cost Break Down</h2>
    {/* Cost Break Down */}
    <TextField id={`${prefix}.agencyCharges`} title={"Agency Charges"} type={"number"} />
    <TextField id={`${prefix}.documentation`} title={"Documentation Charges"} type={"number"} />
    <TextField id={`${prefix}.ediCmcCharges`} title={"EDI / CMC Charges"} type={"number"} />
    <TextField id={`${prefix}.handlingCharges`} title={"Handling Charges"} type={"number"} />
    <TextField id={`${prefix}.professionalFees`} title={"Professional Fees"} type={"number"} />
    <TextField id={`${prefix}.iaaiCharges`} title={"IAAI Charges"} type={"number"} />
    <TextField id={`${prefix}.assessmentCharges`} title={"Assessment Charges"} type={"number"} />
    <TextField id={`${prefix}.examinationCharges`} title={"Examination Charges"} type={"number"} />
    
    </>
  )
}

export default CustomClearenceBrockerageAirDetails