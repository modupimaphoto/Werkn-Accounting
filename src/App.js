import Header from './header';
import OurClients from './ourClients';
import Contact from './contact';
import Footer from './footer';

import black_building from './assets/img/black_building.jpg';

const App = () => {
	
	return(
		<>	<Header />
			<div className='showcase-wrapper text-center p-3 p-md-5'>
				<h1 className='display-3 text-light'>
					Accounting Solutions You Can <span className='text-EG'>Trust.</span>
				</h1>
				<p className='text-center h3 fw-normal p-4 text-white'>
					Whether you are an individual or a business, local or international, 
					you need reliable and professional accounting services to manage your finances and taxes. 
				</p>
				<p className='h3 mb-5 slogan'>
					Expertise. Commitment. Value.
				</p>
				<button type='button' className='btn-quote text-uppercase'>Get a quote</button>
			</div>
			<section className='pt-5 pb-5 bg-Placebo'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-4 p-4 text-md-center border-right-C'>
							<h4>
								<span className='text-C'>01.</span> Tax Preparation.
							</h4>
							<p className='h5 fw-normal'>
								We prepare everything you need for tax return.
							</p>
						</div>
						<div className='col-md-4 p-4 text-md-center border-right-C'>
							<h4>
								<span className='text-C'>02.</span> Startup Package.
							</h4>
							<p className='h5 fw-normal'>
								We build financial models you can pitch to your investors.
							</p>
						</div>
						<div className='col-md-4 p-4 text-md-center'>
							<h4>
								<span className='text-C'>03.</span> Wealth Management.
							</h4>
							<p className='h5 fw-normal'>
								We deliver thoughtful investment advisory services.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='pt-5'>
				<div className='container'>
					<div className='row no-gutters mb-2 g-4'>
						<div className='col-md-4'>
							<img src={ black_building } alt='black building' className='img-fluid rounded'/>
						</div>
						<div className='col-md-8 p-3'>
							<h2 className='text-EG'>About us</h2>
							<p className='h5 fw-light'>
								Established in 2014, Werkn is full service firm, offering affordable 
								accounting solutions to individuals and local and international businesses.
							</p>
							<p className='h5 fw-light'>
								We have a team of qualified and experienced accountants who can handle any accounting task, from bookkeeping and payroll to auditing and tax preparation. 
								We also use the latest technology and software to ensure accuracy and efficiency in our work
							</p>
						</div>
					</div>
					<div>
						<p className='h5 fw-light mb-3'>
							With us, you can focus on your core activities and goals, while we take care of your accounting needs. 
							You can also enjoy peace of mind knowing that your financial records are in good hands and compliant with the relevant laws and regulations.
						</p>
					</div>
				</div>
			</section>
			<section className='pt-5 pb-5'>
				<div className='container'>
					<h3 className='text-EG'>
						Services
					</h3>
					<p className='h6 p-sm-2 mb-3'>
						At werkn, we believe that accounting should be simple, transparent, and affordable.<br />
						That’s why we offer flexible pricing plans that suit your needs and budget. <br />
						<span className="text-C">You can choose from three plans:</span>
					</p>
					<div className='row g-4'>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4 className='card-title'>
										Starter
									</h4>
									<p>
										This plan is ideal for freelancers and sole traders who need basic accounting services. 
										<span className='fw-semibold d-block'>For only R199 per month.</span> 
										<span className="text-C"> 01. </span> you get access to our online accounting software, <br/>
										<span className="text-C"> 02. </span> unlimited invoices and receipts, <br/>
										<span className="text-C"> 03. </span> bank reconciliation, <br/>
										<span className="text-C"> 04. </span> tax calculation, and <br/>
										<span className="text-C"> 05. </span> quarterly financial reports.
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4 className='card-title'>
										Standard
									</h4>
									<p>
										This plan is perfect for small businesses and non-profit organizations who need more comprehensive accounting services. 
										<span className='fw-semibold d-block'>For only R399 per month.</span> 
										<span className="text-C"> 01. </span> you get everything in the Starter plan, <br/>
										<span className="text-C"> 02. </span> plus payroll and compliance, <br/>
										<span className="text-C"> 03. </span> VAT filing, <br/>
										<span className="text-C"> 04. </span> annual financial statements, <br/>
										<span className="text-C"> 05. </span> and business advisory.
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4 className='card-title'>
										Premium
									</h4>
									<p>
										This plan is designed for medium-sized businesses and organizations who need full-service accounting solutions. 
										<span className='fw-semibold d-block'>For only R599 per month.</span>
										 <span className="text-C"> 01. </span>you get everything in the Standard plan,<br/>
										 <span className="text-C"> 02. </span>plus audit and assurance,<br/>
										 <span className="text-C"> 03. </span>tax planning and optimization,<br/>
										 <span className="text-C"> 04. </span>cash flow analysis,<br/>
										 <span className="text-C"> 05. </span>and dedicated account manager.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='alert alert-info p-3 mt-3'>
						#📝 All our plans come with a 🆓🗓️<span className="text-C">30-day free trial</span> and no long-term contracts. You can cancel or change your plan anytime. 
						You can also add extra services such as bookkeeping, consulting, or training for an additional fee.
					</div>
				</div>
			</section>
			<section className='pt-5 pb-5 bg-lightgray'>
				<div className='container'>
					<div className='text-center mb-4'>
						<h3 className='text-uppercase text-EG'>Our testimonials</h3>
						<p className=' h5 fw-normal'>
							What <span className='h5 text-C'>Customers</span> say...
						</p>
					</div>
					<div className='p-2 mb-4'>
						<OurClients />
					</div>
				</div>
			</section>

			<section>
				<div className='container'>
					<Contact />
				</div>
			</section>

			<section className='pt-4 pb-4'>
				<div className='container p-5 shadow rounded'>
					<blockquote className='h5 fw-normal'>
						"Accounting is our expertise. We'll take care for it, so you can focus on yours."
					</blockquote>
					<cite className="text-C">
						- ceo Martin Lightwood
					</cite>
				</div>
			</section>

			<footer>
				<div className='pt-5 pb-5'>
					<Footer />
				</div>
				<div className='text-center text-light p-3'>
					<i className="fa-regular fa-copyright"></i> Werkn 2014 - { new Date().getFullYear() }
				</div>
			</footer>
		</>
	);
}

export default App;