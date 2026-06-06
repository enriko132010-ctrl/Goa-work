   const navbar = document.getElementById('navbar');

    const dropdownsData = [
        {
            title: 'Features ▼',
            links: ['Todo List', 'Calendar', 'Reminders', 'Planning']
        },
        {
            title: 'Company ▼',
            links: ['History', 'Our Team', 'Blog']
        }
    ];

    navbar.style.display = 'flex';
    navbar.style.gap = '20px';
    navbar.style.fontFamily = 'Arial, sans-serif';

    dropdownsData.forEach((drop, index) => {
        const dropdownDiv = document.createElement('div');
        dropdownDiv.style.position = 'relative';
        dropdownDiv.style.cursor = 'pointer';
        dropdownDiv.textContent = drop.title;

        const contentDiv = document.createElement('div');
        contentDiv.style.position = 'absolute';
        contentDiv.style.top = '100%';
        contentDiv.style.left = '0';
        contentDiv.style.backgroundColor = '#f1f1f1';
        contentDiv.style.border = '1px solid #ccc';
        contentDiv.style.display = 'none'; 
        contentDiv.style.minWidth = '150px';
        contentDiv.style.padding = '10px 0';
        contentDiv.style.zIndex = '1';

        drop.links.forEach(linkText => {
            const a = document.createElement('a');
            a.textContent = linkText;
            a.href = '#';
            a.style.display = 'block';
            a.style.padding = '5px 15px';
            a.style.textDecoration = 'none';
            a.style.color = 'black';

            a.addEventListener('mouseenter', () => {
                a.style.backgroundColor = '#ddd';
            });
            a.addEventListener('mouseleave', () => {
                a.style.backgroundColor = 'transparent';
            });

            contentDiv.appendChild(a);
        });

        dropdownDiv.addEventListener('click', () => {
            if(contentDiv.style.display === 'none') {
                contentDiv.style.display = 'block';
            } else {
                contentDiv.style.display = 'none';
            }
        });

        dropdownDiv.appendChild(contentDiv);
        navbar.appendChild(dropdownDiv);
    });