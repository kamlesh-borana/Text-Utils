import React from 'react'

const Contact = (props) => {
  return (
    <div className='container text-center'>
      <p className='mt-5'>Created By : Kamlesh Borana</p>
      <h2 className='mb-3 mt-4'>Contact Me</h2>
      <p><strong>Email Id</strong> : kamlesh.m.borana@gmail.com</p>
      <p><strong>Git Hub</strong> : <a style={{textDecoration: "none", color: props.darkMode?"#fff":"#000"}} href="https://github.com/kamlesh-borana">@kamlesh-borana</a></p>
      <p><strong>Likedin</strong> : <a style={{textDecoration: "none", color: props.darkMode?"#fff":"#000"}} href="https://www.linkedin.com/in/kamlesh-borana/">@kamlesh-borana</a></p>
    </div>
  )
}

export default Contact
