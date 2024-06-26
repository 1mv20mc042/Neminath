import React,{useState} from 'react';
import './CustomerSupport.css';


const CustomerSupport = () => {
    const [accountType, setAccountType] = useState('personal');
    
      const handleAccountTypeChange = (type) => {
        setAccountType(type);
      };
    
      return (
        <div className="login-container">
          <div className="login-left">
            <h2>Sign up/Login now to</h2>
            <ul>
              <li>Lock Flight Prices & Pay Later</li>
              <li>Book Hotels @ ₹0</li>
              <li>Get 3X refund, if your waitlisted train doesn’t get confirmed</li>
            </ul>
          </div>
          <div className="login-right">
            <div className="account-type-toggle">
              <button
                className={accountType === 'personal' ? 'active' : ''}
                onClick={() => handleAccountTypeChange('personal')}
              >
                PERSONAL ACCOUNT
              </button>
              <button
                className={accountType === 'business' ? 'active' : ''}
                onClick={() => handleAccountTypeChange('business')}
              >
                MYBIZ ACCOUNT
              </button>
            </div>
            <form className="login-form">
              <input type="text" placeholder="Enter email or mobile number" />
              <button type="submit" disabled>CONTINUE</button>
              <div className="login-with-google">
                <span>Or Login/Signup With</span>
                <button>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABI1BMVEX////qQzU0qFNChfT7vAWFr/g7gfSQs/gnefPqQTP7ugDpOCgwp1DpPC0npUrqPzHzmpT7vwD7393pNSP85eP97+7+9vb50M3rT0LrSDrvc2r4w8D3vLjub2X62df0o53sWlDwfnbxh3/+7b/8zmP+8tf92oP7wi393Zf8yDr//ff+8Mj94JP81HZMi/Tr8v7/+uv94KS1yvpPs2nd8OJ3pPeUzqKHyphbtnLp9eztY1j1sKvpLRj3qjHsUCv5rwzvaCrxfSb3nhTuXSzpNjj0jB31kwDzmIWev/na5/3C1fvN3vy+sxaesjJsrUTB4smstC6LsDdblfXcuRhVrEqt2rhrrME7n4s3oXdBit88krxzwYc7maM/jdQ+l7A4pW8vi8MS574kAAAERUlEQVRoge2W63faNhjGjeLSIssy1CQ2UIIhSbsmG2y1uSZbt16zJCu9sW5jt///r5hsIJZlyZYvPfuwPR84hyP7x8Oj930lRflfhXTQbN4najb3S+Za54N217HtVqVlO4v2oGeV9AtWb2Gamq4bRi2QYei6Zl449c5BQfJh3alpRq0Sl6Hp9sAqwO/0NT45UM3QzHYnH/mgY5u6kLzl62brQQ72YVczksnbePSuldV2PdU15b6eKXqrpUmiA7xmH8qze4ZUIlQ2lXPZSPpmBttb8+ZAit1caFnRAb0vEXw+NoHXJdgVPRdbk2EvcrJ76Wyl+/kyUfpiNhmHeiAyHHP5PjdFaEMzbKfbHwz6bceuaZHsaqYM24p52pEvFj2ruXts3zrvXoSDRy6TA5vbl6S56/fZZ/frznZAyGWi9LiB65U690jbrwdFK5eJcshretJ4TdELzbZZk6pvojanwo1W4kDqGXKZKB3O/Na1lHPggZxv5dvv4mxHGEk2HcGn37OZ2LEiyalj2FB/eBHdy7LYJypR4xnNNvIc61w9hAH96fNbuCZ3tMjoUQBXw2gMu7T75pm6U+PltqlLC0X5Aob0Z35NGk5pbOVxCFcbkNSklvMOyNEpxfb10liUd8M/Y+CNV69LYytfMnAVngieHN+R0iX1ylcMHDZENu5VpTSkXjlm4cdC+J6UhqPbN75+zMK/KQjf+zGEP2LhR0Xh17dvnDTYDT0rCK9eUXCGrYqKpQQ4LA5/8u/AS4iFhpe+oSG8/FKkNvQzNFEIL7/9qSbKMrjk2MOw/TOMXP5UjMPDwRU7LODNRAC/c5encQxOvRI95qD6E5rNRcHwdMl4r47pVbpcYOMNAHiZBT5m4XfpVepqAW8QAAC5GdgjNpXqNb18eymC8K3Pzmb9SWxHR5H1bY/CxjuwURbr71nj4+j65iIKP3wEO+FpbuPVy+gDJ2HcOyHJYEas8b1718wjxxCq7wAthD0pOFsqROwjR/DDGxAVcmXo8d1kUyG6+QhYITe9la5itul7xU5LFIMDhNK8s73JqZVAax4drJLQIw6b6aCtPByHk11di6PxfuZMYK5xRZnw6ACDCR/vTTD+NIxvJ884EeAE45t3OXhvSn4W4F9+TRyIlHh7usHj9WoZ/oC3nLgYo83/+i1KH44EcGXFDWbDB667nhKtZy75hsKF3+loqDtFTGsh3a9LRP6C/8lsChW8MJRAswS6SBj8saVX3wtDCeJ0BbknCYE/hb0Z0ZxfMil0/GmvypmGcXqeZAD+i0RzlcbOS0fg74RCCXWaVDNCuPShu2LLLVV4Jney+FqCTOYTxxtHEyxvHicPZo68mSQegWkm2xst3XQ8GQgZ0o7i1ziRT8bZNCfalzdxkYBPyDPBOZLB/mqG8WYcos1sRMH39aqAaVreyp/jrm/YdWfr6aQs8E6nc8/XfF40iv+8/gE55IDuidhvOwAAAABJRU5ErkJggg==" alt="Google Logo" />
                </button>
              </div>
            </form>
            <p>
              By proceeding, you agree to MakeMyTrip's <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and <a href="#">T&Cs</a>
            </p>
          </div>
        </div>
      );
    };
    
    

export default CustomerSupport;