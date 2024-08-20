const Templates = [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
    {
        "name": "Node.js Code Assistant",
        "desc": "An AI tool that assists with Node.js tasks by offering support in debugging, performance optimization, package management, API development, and deployment.",
        "category": "Node.js",
        "icon": "/node.svg",
        "aiPrompt": "Assist with Node.js tasks by offering support in debugging, performance optimization, package management, API development, and deployment. Provide solutions or guidance based on specific issues or code snippets shared by the user.",
        "slug": "nodejs-code-assistant",
        "form": [
            {
                "label": "Enter your Node.js issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "TypeScript Code Assistant",
        "desc": "An AI tool that assists with TypeScript tasks by offering support in debugging, type safety, code refactoring, and best practices.",
        "category": "TypeScript",
        "icon": "/ts.svg",
        "aiPrompt": "Assist with TypeScript tasks by offering support in debugging, type safety, code refactoring, and best practices. Provide solutions or guidance based on specific issues or code snippets shared by the user.",
        "slug": "typescript-code-assistant",
        "form": [
            {
                "label": "Enter your TypeScript issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "JavaScript Code Assistant",
        "desc": "An AI tool that helps with JavaScript tasks by offering support in debugging, performance optimization, code readability, and cross-browser compatibility.",
        "category": "JavaScript",
        "icon": "/js.svg",
        "aiPrompt": "Assist with JavaScript tasks by offering support in debugging, performance optimization, code readability, and cross-browser compatibility. Provide solutions or guidance based on specific issues or code snippets shared by the user.",
        "slug": "javascript-code-assistant",
        "form": [
            {
                "label": "Enter your JavaScript issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "Python Code Assistant",
        "desc": "An AI tool that provides support for Python tasks including debugging, performance tuning, code structuring, and adhering to best practices.",
        "category": "Python",
        "icon": "/python.svg",
        "aiPrompt": "Assist with Python tasks by offering support in debugging, performance tuning, code structuring, and adhering to best practices. Provide solutions or guidance based on specific issues or code snippets shared by the user.",
        "slug": "python-code-assistant",
        "form": [
            {
                "label": "Enter your Python issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "MERN Stack Development Assistant",
        "desc": "An AI tool that provides comprehensive support for MERN stack development. Get guidance on MongoDB, Express.js, React, and Node.js, including troubleshooting, code optimization, integration issues, and best practices.",
        "category": "MERN Stack",
        "icon": "/mern.svg",
        "aiPrompt": "Help with MERN stack development by providing guidance on MongoDB, Express.js, React, and Node.js. Assist with troubleshooting, code optimization, integration issues, and best practices based on specific queries or code snippets.",
        "slug": "mern-stack-development-assistant",
        "form": [
            {
                "label": "Enter your MERN stack issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "React Development Assistant",
        "desc": "An AI tool that assists with React development by offering support on components, state management, hooks, performance optimization, and integration with other libraries.",
        "category": "React",
        "icon": "/react.svg",
        "aiPrompt": "Assist with React development by offering support on components, state management, hooks, performance optimization, and integration with other libraries. Provide guidance or solutions based on specific issues or code snippets shared by the user.",
        "slug": "react-development-assistant",
        "form": [
            {
                "label": "Enter your React issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },
    {
        "name": "Backend Development Assistant",
        "desc": "An AI tool that assists with backend development by offering support on server-side logic, API design, database management, authentication, and performance optimization.",
        "category": "Backend Development",
        "icon": "/Backend.png",
        "aiPrompt": "Assist with backend development by offering support on server-side logic, API design, database management, authentication, and performance optimization. Provide solutions or guidance based on specific issues or code snippets shared by the user.",
        "slug": "backend-development-assistant",
        "form": [
            {
                "label": "Enter your backend development issue or code snippet",
                "field": "textarea",
                "name": "issue",
                "required": true
            }
        ]
    },            
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    }



]

export default Templates;