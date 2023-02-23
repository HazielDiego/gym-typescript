import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img src={Logo} alt="logo" />
          <p className='my-5'>Harum fugit minus debitis iste laudantium nisi omnis facere amet illo, optio quidem numquam iure repellendus, quisquam nesciunt, aut ea quos aliquid.</p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Teste</p>
          <p className='my-5'>Quadras</p>
          <p className='my-5'>Tipos</p>
          <p>A Teoria</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>contato@socionics.com.br</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer