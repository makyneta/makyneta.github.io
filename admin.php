<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" href="assets/images/site/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/styles/admin.css">  
    <link href="" rel="stylesheet">
    <link rel="stylesheet" href="">
    <script src="assets/scripts/admin.js"></script>
    <title>Admin – Tomás Mota | Makyneta Studios</title>
</head>
<body>

    <header id="top-header">
        <h1></h1>
        <button class="menu-toggle" onclick="toggleMenu()">
            <i class="fas fa-bars"></i>
        </button>

        <nav id="admin-nav">
            <a href="" onclick="logout(); closeMenu()" class="nav-link">Logout</a>
        </nav>
    </header>

    <main>
        <section id="login-section">
            <div class="login-box">
                <input type="password" id="password-input" placeholder="PASSWORD">
                <button onclick="checkPassword()">&ac;</button>
                <p id="login-message"></p>
            </div>
        </section>

        <div id="content-section">
            
            <section id="projects-section">
                <h2 class="section-title">PROJECTS</h2>
                
                <div class="content-card">
                    <h3 class="function-header prog">💻 Programming</h3>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="color: var(--color-success);">
                                    <td data-label="Project Name">ICE J</td>
                                    <td data-label="Status">Completed</td>
                                </tr>
                                <tr style="color: var(--color-success);">
                                    <td data-label="Project Name">Rodrigo Morgado</td>
                                    <td data-label="Status">Completed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="content-card">
                    <h3 class="function-header light">💡 Light Technician</h3>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="color: var(--color-warning);">
                                    <td data-label="Project Name">Mesa P'ra 4</td>
                                    <td data-label="Status">18JAN26</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="content-card">
                    <h3 class="function-header sound">🔊 Sound Technician</h3>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="color: var(--color-warning);">
                                    <td data-label="Project Name">Mesa P'ra 4</td>
                                    <td data-label="Status">18JAN26</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- <div class="content-card">
                    <h3 class="function-header ti" style="color: var(--color-ti);">🖥️ IT Technician</h3>
                    <div class="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="color: var(--color-ti);">
                                    <td data-label="Project Name">Local NAS/Backup System Setup</td>
                                    <td data-label="Status" style="color: var(--color-success);">Completed</td>
                                </tr>
                                <tr>
                                    <td data-label="Project Name">Network Security Audit (Q4)</td>
                                    <td data-label="Status" style="color: var(--color-warning);">WIP (10%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> -->
            </section>
            
            <section id="gallery-section">
                <h2 class="section-title">GALLERY</h2>
                <div class="content-card" style="margin-top: 0;">
                    <div class="gallery-grid">
                        <div class="img-container">
                            <img src="assets/images/site/vasco-mota.jpg">
                        </div>
                        <div class="img-container">
                            <img src="assets/images/personal/595296039_1273907514773442_5921145347961953862_n.jpg">
                        </div>
                        <div class="img-container">
                            <img src="assets/images/personal/587534140_18550703668014397_4970370577555597654_n.jpg">
                        </div>
                        <div class="img-container">
                            <img src="assets/images/personal/500762179_9623567704436753_197454331866169884_n.jpg">
                        </div>
                        <div class="img-container">
                            <img src="assets/images/personal/510801241_1367998861166851_5484017021674793722_n.jpg">
                        </div>
                        <div class="img-container">
                            <img src="assets/images/personal/511177532_1367998734500197_8645148948487050866_n.jpg">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer>
        &copy; Makyneta Studios, Lda.
    </footer>
</body>
</html>