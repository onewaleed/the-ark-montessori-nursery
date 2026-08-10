/**
 * The Ark Montessori Nursery - Interactive Fees Calculator Controller
 * Real-time calculation with tickbox session selection and 15/30 hours government funding
 */

export function initFeeCalculator() {
  const root = document.getElementById('fee-calculator-root');
  if (!root) return;

  root.innerHTML = `
    <div class="calculator-card">
      <div class="calc-grid">
        <div class="calc-form">
          <h3 class="calc-title">The Ark Session Fee Estimator</h3>
          <p class="calc-subtitle">Tick your required daily sessions, days per week, and funding scheme for live cost estimates.</p>
          
          <div class="calc-field-group">
            <label class="calc-label">1. Child Age Group</label>
            <select id="calc-age" class="calc-select">
              <option value="2" selected>2 Years Old (£30.00 / 3-hr session)</option>
              <option value="3-5">3 to 5 Years Old (£25.00 / 3-hr session)</option>
            </select>
          </div>

          <div class="calc-field-group">
            <label class="calc-label">2. Daily Session Options (Tick all that apply)</label>
            <div class="checkbox-group">
              <label class="checkbox-card">
                <input type="checkbox" id="chk-morning" checked>
                <div class="checkbox-info">
                  <strong>Morning Session</strong>
                  <small>9:00 AM – 12:00 PM (3.0 hrs)</small>
                </div>
              </label>
              
              <label class="checkbox-card">
                <input type="checkbox" id="chk-afternoon" checked>
                <div class="checkbox-info">
                  <strong>Afternoon Session</strong>
                  <small>12:00 PM – 3:00 PM (3.0 hrs)</small>
                </div>
              </label>

              <label class="checkbox-card">
                <input type="checkbox" id="chk-early">
                <div class="checkbox-info">
                  <strong>Early Breakfast Care</strong>
                  <small>8:00 AM – 9:00 AM (+£6.00/day)</small>
                </div>
              </label>

              <label class="checkbox-card">
                <input type="checkbox" id="chk-late">
                <div class="checkbox-info">
                  <strong>After-Nursery Care</strong>
                  <small>3:00 PM – 6:00 PM (+£15.00/day)</small>
                </div>
              </label>
            </div>
          </div>

          <div class="calc-field-group">
            <label class="calc-label">3. Days Per Week</label>
            <div class="days-selector" id="days-buttons">
              <button type="button" class="day-btn" data-days="1">1 Day</button>
              <button type="button" class="day-btn" data-days="2">2 Days</button>
              <button type="button" class="day-btn is-active" data-days="3">3 Days</button>
              <button type="button" class="day-btn" data-days="4">4 Days</button>
              <button type="button" class="day-btn" data-days="5">5 Days</button>
            </div>
          </div>

          <div class="calc-field-group">
            <label class="calc-label">4. Government Funding Scheme</label>
            <select id="calc-funding" class="calc-select">
              <option value="none">Non-Funded (Private Rate)</option>
              <option value="15" selected>15 Hours Funding (5 Free Sessions / Week)</option>
              <option value="30">30 Hours Funding (10 Free Sessions / Week)</option>
            </select>
          </div>
        </div>

        <div class="calc-results-box">
          <div>
            <span class="eyebrow" style="margin-bottom: 0.5rem;">YOUR ESTIMATE</span>
            <div class="result-row">
              <span>Gross Weekly Fee:</span>
              <strong id="res-gross">£150.00</strong>
            </div>
            <div class="result-row savings">
              <span>Government Funding Saving:</span>
              <strong id="res-savings">- £125.00</strong>
            </div>
            <div class="result-row">
              <span>Est. Net Weekly Outlay:</span>
              <strong id="res-net-weekly">£25.00</strong>
            </div>
          </div>

          <div class="result-total-box">
            <div class="result-total-label">Estimated Monthly Outlay</div>
            <div class="result-total-amount" id="res-monthly">£79.17</div>
            <div class="result-period">Averaged over 38 term-time weeks across 12 calendar months</div>
            <button type="button" class="btn btn-primary btn-book-visit" style="width: 100%; margin-top: 1.25rem;">Book a Visit to Confirm Eligibility</button>
          </div>
        </div>
      </div>
    </div>
  `;

  let selectedDays = 3;
  const ageSelect = document.getElementById('calc-age');
  const fundingSelect = document.getElementById('calc-funding');
  const chkMorning = document.getElementById('chk-morning');
  const chkAfternoon = document.getElementById('chk-afternoon');
  const chkEarly = document.getElementById('chk-early');
  const chkLate = document.getElementById('chk-late');
  const dayButtons = root.querySelectorAll('.day-btn');

  function calculate() {
    const age = ageSelect.value;
    const fundingVal = fundingSelect.value;
    const ratePerSession = (age === '2') ? 30.00 : 25.00;

    let dailyCoreSessions = 0;
    if (chkMorning.checked) dailyCoreSessions += 1;
    if (chkAfternoon.checked) dailyCoreSessions += 1;

    let addOnDailyCost = 0;
    if (chkEarly.checked) addOnDailyCost += 6.00;
    if (chkLate.checked) addOnDailyCost += 15.00;

    const totalCoreSessionsWeekly = selectedDays * dailyCoreSessions;
    const grossCoreWeekly = totalCoreSessionsWeekly * ratePerSession;
    const grossAddOnWeekly = selectedDays * addOnDailyCost;
    const grossWeekly = grossCoreWeekly + grossAddOnWeekly;

    let freeSessionsAllowed = 0;
    if (fundingVal === '15') freeSessionsAllowed = 5;
    else if (fundingVal === '30') freeSessionsAllowed = 10;

    const fundedSessionsUsed = Math.min(totalCoreSessionsWeekly, freeSessionsAllowed);
    const weeklySavings = fundedSessionsUsed * ratePerSession;
    const netWeekly = Math.max(0, grossWeekly - weeklySavings);
    const netMonthly = (netWeekly * 38) / 12;

    document.getElementById('res-gross').textContent = `£${grossWeekly.toFixed(2)}`;
    document.getElementById('res-savings').textContent = `- £${weeklySavings.toFixed(2)}`;
    document.getElementById('res-net-weekly').textContent = `£${netWeekly.toFixed(2)}`;
    document.getElementById('res-monthly').textContent = `£${netMonthly.toFixed(2)}`;
  }

  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      selectedDays = parseInt(btn.dataset.days);
      calculate();
    });
  });

  [chkMorning, chkAfternoon, chkEarly, chkLate, ageSelect, fundingSelect].forEach(el => {
    el.addEventListener('change', calculate);
  });

  calculate();
}
