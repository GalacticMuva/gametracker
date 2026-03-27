🎮 GameTracker 
	
	- Pathway 3 CapstoneA React web application that allows users to catalog and manage their favorite video games. This project demonstrates full-stack integration using a React frontend and a Supabase backend.

📋 Project Overview
	
	- This application was built to fulfill the Capstone Project - Level 3 requirements for CodeX Academy. It features a centralized database, responsive navigation, and complete CRUD (Create, Read, Delete) functionality.


1. Folder Structure
	
		✅ Met,"Organized into pages, components, and services."	
2. Environment Variables

		✅ Met,"Uses .env for API keys, accessed via import.meta.env."
3. Supabase Integration

		✅ Met,All DB calls located in gamesService.js using fetch.
4. Functional List Page

		✅ Met,HomePage.jsx renders all games from the database.
5. Functional Form Page

		✅ Met,AddGamePage.jsx includes a form with individual state hooks.
6. React Router DOM

		✅ Met,SPA navigation between / and /add.
7. Netlify Deployment

		⏳ Pending,Ready for production build.

🏗️ Technical Architecture

🗄️ Database Schema
The backend is powered by Supabase with the following games table structure:

	id: Primary Key (Auto-generated)
	title: Text
	genre: Text
	rating: Integer (1-5)


📁 Directory Layout
		
		src/
		├── components/   # Navbar, GameCard, GameForm
		├── pages/        # HomePage, AddGamePage
		├── services/     # gamesService.js (API Logic)
		├── App.jsx       # Route Configuration
		└── main.jsx      # Entry Point


🚀 Local Setup Instructions
		
		Clone the Repo
		    git clone https://github.com/GalacticMuva/gametracker.git
		    cd gametracker


📦 Installation & Dependencies
	
	-To run this project locally, you must install the following packages. These ensure that the Required Features (Routing and Styling) work correctly.

1. Production Dependencies
Used for the core functionality of the application:

	    react-router-dom: Handles SPA navigation between the Home and Add Game pages.
	    react & react-dom: The core library for building the UI.

2. Development Dependencies
Used for the build process and modern styling:

    tailwindcss: The CSS framework used for the UI.

        @import "tailwindcss": The official Vite plugin for Tailwind v4 integration.

    vite: The build tool used to initialize and run the project.

3. Configure Environment Variables

   		Create a .env file in the root directory:
	        VITE_SUPABASE_URL=https://izhthknuxhkfirljdebl.supabase.co
	        VITE_SUPABASE_ANON_KEY=my_public_anon_key

🔒 Security (RLS)
This project utilizes Row Level Security (RLS) to protect the database. I have configured three separate policies for the anon role:

    SELECT: To view the game list on the Home page. 
    
    INSERT: To add new games via the form.
    DELETE: To remove games from the database.
