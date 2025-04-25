    const items = [
        { name: 'Complete Blood Count (CBC),Haemogram - 3PART', b2b: '30', tat: '5 - 6 HRS', mrp: '300', sample: 'EDTA' },
        { name: 'Blood Group(BG)', b2b: '30', tat: '1-2 Days', mrp: '150', sample: 'EDTA' },
        { name: 'Glucose Fasting(F)', b2b: '12', tat: '1 Day', mrp: '50', sample: 'Plasma' },
        { name: 'Glucose Post Prandial(PP)', b2b: '12', tat: '1 Day', mrp: '50', sample: 'Plasma' },
        { name: 'T3 T4 TSH (tft)', b2b: '60', tat: '3 Days', mrp: '500', sample: 'Serum' },
        { name: 'Cholinesterase', b2b: '800', tat: '24 HRS', mrp: '1,000', sample: 'Serum' },
        { name: 'Bile Acids-Total', b2b: '750', tat: '24 HRS', mrp: '2,100', sample: 'Serum' },
        { name: 'Bicarbonate (Calculated from CO2)', b2b: '200', tat: '10 - 12 HRS', mrp: '400', sample: 'Serum' },
        { name: 'Factor-X', b2b: '1200', tat: '4 - 5 DAYS', mrp: '4500', sample: 'Plasma' },
        { name: 'Helicobacter Pylori-IgA', b2b: '500', tat: 'NEXT DAY', mrp: '1,200', sample: 'Serum' },
        { name: 'Cholesterol - LDL Direct', b2b: '75', tat: '4 - 6 HRS', mrp: '500', sample: 'Serum' },
        { name: 'Cardiolipin IgG & IgM Antibody', b2b: '550', tat: '1 - 2 DAYS', mrp: '3,000', sample: 'Serum' },
        { name: 'AFB Culture (Tissue)', b2b: '700', tat: '42 - 45 Days', mrp: '2,000', sample: 'Tissue' },
        { name: 'Cytomegalovirus IgG Antibody', b2b: '110', tat: '1 - 2 DAYS', mrp: '450', sample: 'CSF' },
        { name: 'AFB Culture (Sputum)', b2b: '1200', tat: '42DAYS', mrp: '1800', sample: 'Sputum' },
        { name: 'AFB Stain (ZN Stain) 2 Sputum samples', b2b: '120', tat: '24 HRS', mrp: '400', sample: 'Sputum' },
        { name: 'Ammonia', b2b: '400', tat: 'SAME DAY', mrp: '1,000', sample: 'Heparin' },
        { name: 'Dengue IgM Quantitative', b2b: '220', tat: '1 - 2 DAYS', mrp: '750', sample: 'Serum' },
        { name: 'Factor-XII', b2b: '1200', tat: '4 - 5 DAYS', mrp: '4,500', sample: 'Plasma' },
        { name: 'Hepatitis Core Antibody Total (HBcAb- Total)', b2b: '300', tat: '1 - 2 DAYS', mrp: '800', sample: 'Serum' },
        { name: 'Gram Stain - CSF', b2b: '80', tat: 'NEXT DAY', mrp: '400', sample: 'CSF' },
        { name: 'Hepatitis C Virus - Qualitative PCR', b2b: '1320', tat: '1 - 2 DAYS', mrp: '2500', sample: 'EDTA' },
        { name: 'Culture, Aerobic, Blood', b2b: '225', tat: '', mrp: '1,100', sample: 'Whole Blood' },
        { name: 'Fluid Examination - Routine', b2b: '195', tat: '24 HRS', mrp: '400', sample: 'CSF' },
        { name: 'Homocysteine Serum', b2b: '410', tat: '1 - 2 DAYS', mrp: '1,000', sample: 'Serum' },
        { name: 'Complete Blood Count (CBC),Haemogram - 5PART + Malarial Parasites Smear', b2b: '70', tat: '5 - 6 HRS', mrp: '700', sample: 'EDTA' },
        { name: 'Culture, Aerobic, Throat Swab Automated', b2b: '500', tat: '3 - 4 DAYS', mrp: '1,100', sample: 'Throat Swab' },
        { name: 'Fluid Cell Count', b2b: '100', tat: 'SAME DAY', mrp: '300', sample: 'Body Fluids' },
        { name: 'Herpes Simplex Virus 2 IgG & IgM', b2b: '220', tat: '1 - 2 DAYS', mrp: '2,000', sample: 'Serum' },
        { name: 'HIV 1 RNA PCR - Qualitative', b2b: '1750', tat: '3 - 4 DAYS', mrp: '2500', sample: 'EDTA' },
        { name: 'Angiotensin Converting Enzyme (ACE)', b2b: '550', tat: '24 HRS	', mrp: '1,400	', sample: 'CSF' },
        { name: 'Factor V Clotting', b2b: '1500', tat: '4 - 5 DAYS', mrp: '5000', sample: 'Plasma' },
        { name: 'Gram Stain - Vaginal Swab', b2b: '100', tat: 'NEXT DAY	', mrp: '400', sample: 'Swab' },
        { name: 'Culture, Aerobic, Semen', b2b: '200', tat: '4DAYS	', mrp: '1,100', sample: 'Semen' },
        { name: 'Hepatitis B Surface antigen (HBsAg)-Rapid', b2b: '60', tat: '6 - 8 HRS', mrp: '200', sample: 'Serum' },
        { name: 'Adenosine Deaminase (ADA) Serum', b2b: '170', tat: '24 HRS	', mrp: '800', sample: 'Serum' },
        { name: 'Cytology -Fluids -Ovarian Cyst', b2b: '500', tat: '', mrp: '800', sample: 'Fixed Slides' },
        { name: 'Herpes Simplex Virus 2 IgM', b2b: '140', tat: '1 - 2 DAYS', mrp: '1,000', sample: 'Serum' },
        { name: 'Hepatitis B envelope Antibody (AntiHBe)', b2b: '300', tat: '1 - 2 DAYS', mrp: '1260', sample: 'Serum' },
        { name: 'Adenosine Deaminase (ADA) PUS', b2b: '225', tat: '24 HRS	', mrp: '1,400', sample: 'Pus' },
        { name: 'Cytology-Drain Fluid', b2b: '500', tat: '4days', mrp: '800', sample: 'Body Fluids' },
        { name: 'Beta Human Chorionic Gonodotropin Hormone (BHCG) - SERUM', b2b: '150', tat: 'SAME DAY', mrp: '500', sample: 'Serum' },
        { name: 'Complement 4 (C4)', b2b: '250', tat: 'SAME DAY', mrp: '600', sample: 'Serum' },
        { name: 'Fungal Culture Sputum', b2b: '250', tat: '', mrp: '1,000', sample: 'Sputum' },
        { name: 'Glucose 6 Phosphate Dehydrogenase (G6PD Qualitative)', b2b: '225', tat: 'SAME DAY', mrp: '800', sample: 'EDTA' },
        { name: 'Epstein Bar Virus IgG', b2b: '1980', tat: '1 - 2 DAYS', mrp: '2500', sample: 'Serum' },
        { name: 'Uric Acid 24 hrs Urine', b2b: '55', tat: 'SAME DAY	', mrp: '300', sample: 'Urine' },
        { name: 'BRL Fitness 1', b2b: '400', tat: 'SAME DAY', mrp: '1500', sample: 'EDTA,Serum,Plasma,Urine' },
        { name: 'Prostate Specific Antigen (Total)', b2b: '130', tat: '8 - 10 HRS', mrp: '700', sample: 'Serum' },
        { name: 'HIV 1 & 2 Antibody -Rapid	', b2b: '100', tat: '1 - 2 DAYS', mrp: '500', sample: 'Serum' },
        { name: 'Ferritin', b2b: '130', tat: 'SAME DAY', mrp: '990', sample: 'Serum' },
        { name: 'Herpes Simplex Virus 1 IgM', b2b: '140', tat: '1 - 2 DAYS', mrp: '1,000', sample: 'Serum' },
        { name: 'Calcium Serum', b2b: '25', tat: '4 - 6 HRS', mrp: '200', sample: 'Serum' },
        { name: 'Culture, Aerobic, Cervical Swab', b2b: '200', tat: '4DAYS', mrp: '1,100', sample: 'Cervical Swab' },
        { name: 'AFB Culture (CSF)', b2b: '1200', tat: '42DAYS', mrp: '1800', sample: 'CSF' },
        { name: 'Culture, Aerobic, Nasal Swab', b2b: '200', tat: '4DAYS', mrp: '1,100', sample: 'Swab' },
        { name: 'Cytology -Fluids -Pericardial Fluid', b2b: '500', tat: '', mrp: '800', sample: 'Pericardial Fluid' },
        { name: 'Cytomegalovirus IgM Antibody', b2b: '110', tat: '1 - 2 DAYS', mrp: '450', sample: 'CSF' },
        { name: 'Cytomegalovirus IgM Antibody', b2b: '110', tat: '1 - 2 DAYS', mrp: '450', sample: 'Serum' },
        { name: 'Fungal Culture Swab', b2b: '250', tat: '', mrp: '1,000', sample: 'Swab' },
        { name: 'Gram Stain - Pleural Fluid', b2b: '80', tat: 'NEXT DAY', mrp: '400', sample: 'Pleural Fluid' },
        { name: 'Hepatitis B Virus - Viral Load / Quantitative', b2b: '1500', tat: '1 - 2 DAYS', mrp: '1,000', sample: 'Heparin' },
        { name: 'Alanine Transaminase (ALT/SGPT)', b2b: '20', tat: '4 - 6 HRS', mrp: '250', sample: 'Serum' },
        { name: 'Albumin Body Fluid', b2b: '50', tat: '4 - 6 HRS', mrp: '250', sample: 'Body Fluids' },
        { name: 'Anti Mullerian Hormone (AMH)', b2b: '550', tat: '4 - 6 HRS', mrp: '1,300', sample: 'Serum' },
        { name: 'Hemoglobin A2', b2b: '375', tat: '', mrp: '1000', sample: 'EDTA' },
        { name: 'Activated Partial Thromboplastin Time (APTT/PTTK)', b2b: '150', tat: '8 - 10 HRS', mrp: '500', sample: 'Citrate' },
        { name: 'Beta-2- Glycoprotein -1 IgA', b2b: '400', tat: '3 - 4 DAYS', mrp: '1,200', sample: 'Serum' },
        { name: 'Calcitonin', b2b: '1600', tat: '8HRS', mrp: '3,270', sample: 'Serum' },
        { name: 'Glucose Challenge Test', b2b: '90', tat: 'SAME DAY', mrp: '150', sample: 'Plasma' },
        { name: 'Anti Nuclear Antibody(ANA)', b2b: '220', tat: 'SAME DAY', mrp: '2,300', sample: 'Serum' },
        { name: 'Calcium/Creatinine - Ratio', b2b: '200', tat: 'SAME DAY', mrp: '400', sample: 'Urine' },
        { name: 'Creatine Kinase MB (CK-MB) Activity', b2b: '200', tat: 'SAME DAY', mrp: '800', sample: 'Serum' },
        { name: 'Cholesterol - HDL', b2b: '25', tat: '4 - 6 HRS', mrp: '500', sample: 'Serum' },
        { name: 'Gram Stain - Eye Swab', b2b: '100', tat: 'NEXT DAY', mrp: '400', sample: 'Swab' },
        { name: 'Apolipoprotein A1,Apolipoprotein B (APO-B),Apolipoprotein B/A1 Ratio (calculated)', b2b: '385', tat: '24 HRS', mrp: '1000', sample: 'Serum' },
        { name: 'Fungal Culture PUS', b2b: '250', tat: '', mrp: '1,000', sample: 'Pus' },
        { name: 'Gram Stain - Throat Swab', b2b: '100', tat: 'NEXT DAY', mrp: '400', sample: 'Swab' },
        { name: 'Hemoglobin', b2b: '60', tat: '4 - 6 HRS', mrp: '300', sample: 'EDTA' },
        { name: 'Anti Thyroglobulin Antibody (ATG)', b2b: '300', tat: 'SAME DAY', mrp: '2,000', sample: 'Serum' },
        { name: 'Cardiolipin IgM Antibody', b2b: '275', tat: '1 - 2 DAYS', mrp: '1,500', sample: 'Serum' },
        { name: 'C-Peptide', b2b: '350', tat: 'SAME DAY', mrp: '1,000', sample: 'Serum' },
        { name: 'Cytology- Ascitic Fluid', b2b: '500', tat: '', mrp: '800', sample: 'Ascitic Fluid' },
        { name: 'Cytomegalovirus IgG Antibody', b2b: '110', tat: '1 - 2 DAYS', mrp: '450', sample: 'Serum' },
        { name: 'Factor-VII', b2b: '1200', tat: '4 - 5 DAYS', mrp: '4500', sample: 'Plasma' },
        { name: 'AFB Culture (Urine)', b2b: '1200', tat: '42DAYS', mrp: '1800', sample: 'Urine' },
        { name: 'AFB Stain (ZN Stain) 1 sample', b2b: '120', tat: '24 HRS', mrp: '400', sample: 'Sputum' },
        { name: 'Blood Urea Nitrogen (BUN)', b2b: '25	', tat: 'SAME DAY', mrp: '240', sample: 'Serum' },
        { name: 'AFP-SERUM', b2b: '210', tat: '24 HRS', mrp: '800', sample: 'Serum' },
        { name: 'CA125 - Ovarian Cancer marker', b2b: '250', tat: '24 HRS', mrp: '1,000', sample: 'Serum' },
        { name: 'CRP Cardiac (hsCRP)Quantitative', b2b: '150', tat: 'SAME DAY', mrp: '800', sample: 'Serum' },
        { name: 'Hepatitis C Virus (HCV Antibody)-Rapid', b2b: '175', tat: '6 - 8 HRS', mrp: '400', sample: 'Serum' },
        { name: 'Cytology -Fluids -Peritoneal Fluid', b2b: '500', tat: '', mrp: '800', sample: 'Body Fluids' },
        { name: 'Anti ds-DNA Antibody', b2b: '350', tat: 'NEXT DAY', mrp: '1,200', sample: 'Serum' },
        { name: 'Erythrocyte Count (RBC Count)', b2b: '60', tat: '4 - 6 HRS', mrp: '300', sample: 'EDTA' },
        { name: 'Lipid (Cholesterol) Profile (8 Tests)', b2b: '78', tat: '6 - 8 HRS', mrp: '800', sample: 'Serum' },
        { name: 'Liver Profile (10 Tests)', b2b: '95', tat: '6 - 8 HRS', mrp: '1,200', sample: 'Serum' },
        { name: 'Renal Profile Mini (7 Tests)', b2b: '60', tat: '8 - 10 HRS', mrp: '350', sample: 'Serum' },
        { name: 'Anti Nuclear Antibody(ANA)', b2b: '220', tat: 'SAME DAY', mrp: '2,300', sample: 'Serum' },
        { name: 'Widal Test (Slide Test)', b2b: '45', tat: '6 - 8 HRS', mrp: '200', sample: 'Serum' }
    ];

    const SearchBar = document.getElementById("SearchBar");
    const tableBody = document.getElementById("testTable").getElementsByTagName("tbody")[0];
    const table = document.getElementById("testTable");
    const pageNumber = document.getElementById("pageNumber");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const itemsPerPage = 10;
    let currentPage = 1;
    let filteredItems = [...items];

    // Function to populate table rows
    function populateTable(data) {
        table.style.display = 'table'; // Show the table when data is populated
        tableBody.innerHTML = ''; // Clear the table before populating

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, data.length);
        const currentItems = data.slice(startIndex, endIndex);

        currentItems.forEach(item => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.b2b}</td>
                <td>${item.tat}</td>
                <td>${item.mrp}</td>
                <td>${item.sample}</td>
            `;
        });

        updatePaginationControls();
    }

    // Function to update pagination controls
    function updatePaginationControls() {
        const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        pageNumber.textContent = `Page ${currentPage}`;

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
    }

    // Function to change the page
    function changePage(direction) {
        if (direction === 'next' && currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
            currentPage++;
        } else if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        }
        populateTable(filteredItems);
    }

    // Function to filter table based on search query
    SearchBar.addEventListener('input', function() {
        const query = SearchBar.value.toLowerCase();
        filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
        currentPage = 1; // Reset to first page on search
        populateTable(filteredItems);
    });

    // Initial population of the table
     function toggleText() {
        const moreText = document.querySelector('.MoreText');
        const toggleButton = document.getElementById('toggleButton');
        
        if (moreText.classList.contains('hide')) {
          moreText.classList.remove('hide');
          toggleButton.textContent = 'Read Less'; // Change the button text to 'Read Less'
        } else {
          moreText.classList.add('hide');
          toggleButton.textContent = 'Read More'; // Change the button text back to 'Read More'
        }
      }


