import Header from './header';

import black_building from './assets/img/black_building.jpg';

const App = () => {
	
	return(
		<>	<Header />
			<div className='showcase-wrapper text-center p-3 p-md-5'>
				<h1 className='display-2'>
					Accounting Solutions You Can Trust.
				</h1>
				<p className='text-center h2 fw-normal p-4'>
					Whether you are an individual or a business, local or international, 
					you need reliable and professional accounting services to manage your finances and taxes. 
				</p>
				<p className='h3 mb-5'>
					Expertise. Commitment. Value.
				</p>
				<button type='button' className='btn-quote text-uppercase'>Get a quote</button>
			</div>
			<section>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-4 p-3 text-md-center'>
							<h4>
								01 Tax Preparation.
							</h4>
							<p className='h5 fw-normal'>
								We prepare everything you need for tax return.
							</p>
						</div>
						<div className='col-md-4 p-3 text-md-center'>
							<h4>
								02 Startup Package.
							</h4>
							<p className='h5 fw-normal'>
								We build financial models you can pitch to your investors.
							</p>
						</div>
						<div className='col-md-4 p-3 text-md-center'>
							<h4>
								03 Wealth Management.
							</h4>
							<p className='h5 fw-normal'>
								We deliver thoughtful investment advisory services.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='pt-5 pb-1'>
				<div className='container'>
					<div className='row no-gutters g-4'>
						<div className='col-md-4'>
							<img src={ black_building } alt='black building' className='img-fluid rounded'/>
						</div>
						<div className='col-md-8 p-3'>
							<h2>About us</h2>
							<p className='h4 fw-normal'>
								Established in 1992, Werkn is full service firm, offering affordable 
								accounting solutions to individuals and local and international businesses.
							</p>
							<p className='h4 fw-normal'>
								We have a team of qualified and experienced accountants who can handle any accounting task, from bookkeeping and payroll to auditing and tax preparation. 
								We also use the latest technology and software to ensure accuracy and efficiency in our work
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='container'>
					<div className='row'>
						<div className='col-md-10'>
							<p className='h4 fw-normal'>
								With us, you can focus on your core activities and goals, while we take care of your accounting needs. 
								You can also enjoy peace of mind knowing that your financial records are in good hands and compliant with the relevant laws and regulations.
							</p>
						</div>
						<div className='col-md-2 bg-black'>
							
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;