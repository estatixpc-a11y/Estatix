export async function submitEnquiry(data: object, form: HTMLFormElement) {
  if (['localhost','127.0.0.1'].includes(window.location.hostname)) throw new Error('Please use the live Estatix website to submit an enquiry.');
  const trap = new FormData(form).get('website');
  if (trap) throw new Error('Please try submitting the form again.');
  const fields = new URLSearchParams({'form-name':'estatix-enquiries', website:''});
  for (const [key,value] of Object.entries(data)) {
    if (value !== undefined && value !== null) fields.set(key, String(value).slice(0,4000));
  }
  if (!fields.get('enquiryType')) fields.set('enquiryType', fields.has('areaSize')?'land_parcel':'channel_partner');
  const controller = new AbortController(); const timeout = setTimeout(()=>controller.abort(),20000);
  try {
    const response = await fetch('/', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body:fields.toString(), signal:controller.signal});
    if (!response.ok) throw new Error('Your enquiry could not be saved. Please try again or call our team.');
  } catch(error) {
    if (error instanceof Error && error.name==='AbortError') throw new Error('The request timed out. Please try again or call our team.');
    throw error;
  } finally { clearTimeout(timeout); }
}
