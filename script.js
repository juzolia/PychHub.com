const courses = {
  3: {
    2: `
    
            <div class="card-grid">
                
    <div class="card-grid">
        <!-- Educational Psychology 2 -->
        <div class="card">
          <div class="badge">HomeWorks | Attendance is required</div>
          <h3>🎓 Educational Psychology 2</h3>
          <p>Advanced theories of instruction and cognitive development</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 65%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">
            👩🏫 Dr. Faten Sharifeh | Dr. Angham Outhman
          </div>
        </div>
  
        <!-- Experimental Psychology 2 -->
        <div class="card">
          <div class="badge">Experimants | Attendance is required</div>
          <h3>🔬 Experimental Psychology 2</h3>
          <p>Advanced research techniques and data analysis</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 40%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">👩🔬 Dr. fidaa yasin</div>
        </div>
  
        <!-- Social Psychology 2 -->
        <div class="card">
          <div class="badge">Research | Attendance is required</div>
          <h3>👥 Social Psychology 2</h3>
          <p>Advanced study of prejudice, attraction, and group behavior</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 90%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">
            👮♂️Dr. Safwan Alshbli | Dr. Angham Outhman
          </div>
        </div>
  
        <!-- Educational Techniques -->
        <div class="card">
          <div class="badge">
            Technical learning method application | Attendance is required
          </div>
          <h3>🛠️ Educational Techniques</h3>
          <p>Innovative teaching methods and classroom strategies</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 100%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">Curriculum</a></button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">👨💻 Dr. Ahmed Almohammad</div>
        </div>
  
        <!-- Psychological Measurement -->
        <div class="card">
          <div class="badge">Test Applications</div>
          <h3>📊 Psychometry</h3>
          <p>Assessment tools and psychometric evaluation</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">
            👨🏫 Dr.Hekmat Althiab | Drs. Asmaa Alhasan & Sumiah Swed & Eman
            Qunbor
          </div>
        </div>
  
        <!-- School Counseling -->
        <div class="card">
          <div class="badge">Field Work</div>
          <h3>💬 School Counseling</h3>
          <p>Supporting student well-being and academic success</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 50%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">👩⚕️Dr. Rita Zedo | Prof. Aghyad Rasoul</div>
        </div>
  
        <!-- Child Protection Strategies -->
        <div class="card">
          <div class="badge">Research</div>
          <h3>🛡️ Child Protection Strategies</h3>
          <p>Preventing and addressing violence against children</p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 30%"></div>
          </div>
          <div class="resource-buttons">
            <button class="resource-btn">📚 Curriculum</button>
            <button class="resource-btn"> <a href="./img/APA-Dictionary-of-Psychology-by-American-Psychological-Association-z-lib.org_-2.pdf" download >📦 Resources</a></button>
          </div>
          <div class="faculty-chip">👩💼 Dr. Hanan Nasrallah</div>
        </div>
      </div>

            </div>
    
        `,
  },
};

// Step 1: Handle year selection
function handleYearChange() {
  const yearSelect = document.getElementById("yearSelect");
  const semesterSelect = document.getElementById("semesterSelect");

  if (yearSelect.value) {
    semesterSelect.style.display = "inline-block";
    document.getElementById("courseContainer").innerHTML = "";
  } else {
    semesterSelect.style.display = "none";
    document.getElementById("courseContainer").innerHTML = "";
  }
}

// Step 2: Handle semester selection
function handleSemesterChange() {
  const year = document.getElementById("yearSelect").value;
  const semester = document.getElementById("semesterSelect").value;
  const container = document.getElementById("courseContainer");

  if (year && semester) {
    container.innerHTML = courses[year][semester];
  } else {
    container.innerHTML = "";
  }
}
