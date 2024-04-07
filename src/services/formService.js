const submitFormToSheet = async (formData) => {
    try {
        const res = await fetch(
            'https://script.google.com/macros/s/AKfycbzQ-SDSK3f1PH33yMD1jJd0rwX7u2RtWCL13Wz0M46xlb-eMJ4VRfv9mesEVFCFoHBFgg/exec',
            {
                method: 'POST',
                body: formData
            }
        )
        if(res.ok) {
            alert('Thank you for your response!, We will get back to you soon!')
        }
        return true;
    } catch (error) {
        // console.log();
        alert('Something went Wrong 🥲')
        return false;
    }

}

export {
    submitFormToSheet
}