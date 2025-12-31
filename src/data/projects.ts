// Base project interface for backwards compatibility
export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  challenges: string;
  outcome: string;
}

// Extended case study for Unity/shader projects
export interface ExtendedCaseStudy {
  whatItIs: string;
  keyFeatures: string[];
  technicalBreakdown: {
    howItWorks: string[];
    architecture: string[];
    notableDetails: string[];
  };
  setupUsage: {
    install: string[];
    quickStart: string | null;
    parameters: { name: string; type: string; effect: string }[];
  };
  challengesLearnings: string[];
  outcomes: string[];
}

export interface ProjectMedia {
  type: "image" | "gif";
  pathHint: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  year: number;
  category: "backend" | "ai" | "unity" | "unity-shaders" | "unity-tools" | "robotics";
  summary: string;
  impact?: string;
  stack: string[];
  tags?: string[];
  github?: string;
  linkedin?: string;
  featured: boolean;
  // Standard case study (existing projects)
  caseStudy?: ProjectCaseStudy;
  // Extended case study fields (new Unity projects)
  oneLiner?: string;
  extendedCaseStudy?: ExtendedCaseStudy;
  links?: {
    github: string | null;
    demo: string | null;
  };
  media?: ProjectMedia[];
}

export const projects: Project[] = [
  // === EXISTING PROJECTS ===
  {
    slug: "banking-api",
    title: "Banking API Project",
    year: 2025,
    category: "backend",
    summary: "Enterprise-grade .NET 8 Web API with layered architecture",
    impact: "Enterprise-grade authentication powering secure financial transactions",
    stack: [".NET 8", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "xUnit", "Moq"],
    featured: true,
    caseStudy: {
      overview: "A comprehensive banking API developed during my internship at Odeabank, implementing modern enterprise patterns and security practices.",
      problem: "Financial institutions require robust, secure, and scalable APIs that handle sensitive customer data while maintaining high performance and strict security compliance.",
      approach: "Implemented a layered architecture separating concerns across presentation, business logic, and data access layers. Used Entity Framework Core for database operations with SQL Server, implemented JWT-based authentication with role-based authorization.",
      features: [
        "Layered architecture with clear separation of concerns",
        "JWT authentication with refresh tokens",
        "Role-based authorization (Admin, User, Teller)",
        "DTO validation using FluentValidation",
        "Comprehensive unit testing with xUnit and Moq",
        "Agile development with GitHub collaboration"
      ],
      challenges: "Balancing security requirements with development velocity while ensuring comprehensive test coverage. Learned to implement proper token lifecycle management and secure password hashing.",
      outcome: "Successfully delivered a production-ready API that met all security requirements and passed code review standards. Gained deep understanding of enterprise .NET development patterns."
    }
  },
  {
    slug: "deepfake-analysis",
    title: "Deepfake Video Analysis System",
    year: 2024,
    category: "ai",
    summary: "Deep learning system for detecting synthetic media",
    impact: "Detecting synthetic media with deep learning precision",
    stack: ["PyTorch", "OpenCV", "Albumentations", "Python"],
    github: "https://github.com/SametKaras/deepfake-video-analysis",
    featured: true,
    caseStudy: {
      overview: "A computer vision system designed to detect deepfake videos using deep learning techniques and frame-by-frame analysis.",
      problem: "The proliferation of deepfake technology poses significant threats to media authenticity, requiring automated detection systems that can identify synthetic content at scale.",
      approach: "Developed a deep learning pipeline using PyTorch for model training and inference. Used OpenCV for video processing and frame extraction. Implemented data augmentation with Albumentations to improve model robustness.",
      features: [
        "Frame-by-frame video analysis",
        "Deep neural network for fake detection",
        "Data augmentation pipeline",
        "Batch processing for large video datasets",
        "Confidence scoring for predictions"
      ],
      challenges: "Handling the variety of deepfake generation methods required extensive data augmentation and careful model architecture design. Optimized inference speed for real-time detection feasibility.",
      outcome: "Created a functional deepfake detection system capable of processing video content and providing authenticity assessments with measurable accuracy metrics."
    }
  },
  {
    slug: "robotaxi",
    title: "Teknofest 2024 Robotaxi",
    year: 2024,
    category: "robotics",
    summary: "Autonomous vehicle system for Teknofest competition",
    impact: "Autonomous navigation through sensor fusion and control systems",
    stack: ["ROS1", "Python", "C++", "GPS", "IMU", "PID Control"],
    linkedin: "https://linkedin.com/in/sametkaras",
    featured: true,
    caseStudy: {
      overview: "An autonomous vehicle project developed for the Teknofest 2024 Robotaxi competition, implementing sensor fusion and navigation systems.",
      problem: "Autonomous vehicles require reliable navigation systems that can operate in complex urban environments, handling GPS uncertainty and dynamic obstacles.",
      approach: "Built on ROS1 framework for modular development. Implemented sensor fusion combining GPS and IMU data for accurate positioning. Developed PID control algorithms for smooth vehicle motion and steering.",
      features: [
        "ROS1-based modular architecture",
        "GPS + IMU sensor fusion",
        "PID control for steering and velocity",
        "Waypoint navigation system",
        "Real-time obstacle detection"
      ],
      challenges: "Achieving reliable navigation in GPS-degraded environments required robust sensor fusion algorithms. Tuning PID parameters for smooth autonomous driving was an iterative process.",
      outcome: "Competed in Teknofest 2024 Robotaxi competition, demonstrating autonomous navigation capabilities in a controlled environment."
    }
  },
  {
    slug: "skin-analysis",
    title: "Skin Type Analysis Application",
    year: 2025,
    category: "ai",
    summary: "Medical image classification using transfer learning",
    impact: "Medical-grade classification using transfer learning",
    stack: ["MATLAB", "EfficientNet-B0", "Transfer Learning"],
    github: "https://github.com/sinmkeskin/skin-analysis-matlab",
    featured: true,
    caseStudy: {
      overview: "A medical imaging application that classifies skin types using deep learning and transfer learning techniques in MATLAB.",
      problem: "Accurate skin type classification is essential for dermatological applications and personalized skincare recommendations, but manual assessment is time-consuming and subjective.",
      approach: "Utilized EfficientNet-B0 as the base model with transfer learning to adapt pre-trained features for skin classification. Implemented in MATLAB's Deep Learning Toolbox for streamlined development and deployment.",
      features: [
        "EfficientNet-B0 transfer learning",
        "Multi-class skin type classification",
        "Image preprocessing pipeline",
        "Model evaluation metrics",
        "MATLAB-based deployment"
      ],
      challenges: "Working with limited medical imaging data required careful data augmentation and transfer learning strategies to prevent overfitting while maintaining classification accuracy.",
      outcome: "Developed a functional skin type classifier achieving reliable accuracy on test datasets, demonstrating the viability of transfer learning for medical imaging tasks."
    }
  },
  {
    slug: "gnss-navigation",
    title: "GNSS-Independent Navigation",
    year: 2024,
    category: "ai",
    summary: "Visual landmark detection for GPS-denied environments",
    impact: "Visual landmark detection for GPS-denied environments",
    stack: ["YOLOv5", "Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/BesirVelioglu/SAYZEK2024-AI-SEC-Heron",
    featured: true,
    caseStudy: {
      overview: "A navigation system that uses visual landmark detection to enable navigation in GPS-denied or degraded environments.",
      problem: "Traditional GPS-based navigation fails in indoor environments, urban canyons, and jamming scenarios. Alternative navigation methods using visual landmarks provide a robust backup.",
      approach: "Implemented YOLOv5 for real-time landmark detection and recognition. Combined visual detection with known landmark positions to estimate vehicle location without GPS.",
      features: [
        "YOLOv5 landmark detection",
        "Real-time video processing",
        "Landmark-based positioning",
        "GPS-denied navigation capability",
        "Cross-platform deployment"
      ],
      challenges: "Training reliable landmark detectors required extensive data collection and annotation. Achieving real-time performance while maintaining detection accuracy was a key optimization goal.",
      outcome: "Developed a proof-of-concept system demonstrating visual navigation capabilities as part of the SAYZEK 2024 competition project."
    }
  },
  {
    slug: "kitchen-chaos",
    title: "Kitchen Chaos",
    year: 2023,
    category: "unity",
    summary: "Multiplayer cooking game with modular architecture",
    impact: "Mastering game architecture through modular design patterns",
    stack: ["Unity", "C#", "ScriptableObjects", "Input System", "Animator", "State Machines"],
    github: "https://github.com/SametKaras/KitchenChaos-Game",
    featured: true,
    caseStudy: {
      overview: "A cooking simulation game built in Unity, focusing on clean architecture patterns and modular game design.",
      problem: "Game development projects often become unmanageable as complexity grows. Implementing proper architectural patterns from the start ensures maintainability and extensibility.",
      approach: "Built with a focus on clean code principles using ScriptableObjects for data-driven design, state machines for game logic, and Unity's new Input System for responsive controls.",
      features: [
        "ScriptableObjects for data-driven design",
        "State machine-based game logic",
        "Unity Input System integration",
        "Animator-driven character animations",
        "Modular recipe and ingredient system"
      ],
      challenges: "Balancing code architecture with rapid game development iteration. Learning to leverage ScriptableObjects effectively for decoupled, testable game systems.",
      outcome: "Created a fully functional cooking game demonstrating professional Unity development patterns and serving as a learning project for game architecture best practices."
    }
  },

  // === NEW UNITY SHADER/TOOLS PROJECTS ===
  {
    slug: "stylized-water-shader",
    title: "Stylized Water Shader",
    year: 2025,
    category: "unity-shaders",
    summary: "Feature-rich water shader with tessellation, planar reflections, and Gerstner wave simulation",
    oneLiner: "Feature-rich water shader with tessellation, planar reflections, and Gerstner wave simulation for Unity's Built-in Pipeline.",
    stack: ["Unity", "HLSL", "ShaderLab", "C#"],
    tags: ["Tessellation", "Planar Reflection", "Gerstner Waves", "Voronoi", "Caustics", "Flow Maps", "Foam", "Depth-Based Effects"],
    github: "https://github.com/SametKaras/stylized-water-shader",
    featured: true,
    extendedCaseStudy: {
      whatItIs: "A professional stylized water shader demonstrating 10+ advanced graphics programming techniques. Implements physically-based wave displacement, real-time planar reflections, Voronoi caustics, and GPU tessellation for adaptive surface detail.",
      keyFeatures: [
        "Gerstner wave displacement with tangent/binormal calculation",
        "Distance-based GPU tessellation (Hull/Domain shaders)",
        "Real-time planar reflections via reflection camera",
        "Procedural Voronoi-based caustics patterns",
        "Flow maps for directional water movement",
        "Shore waves with animated foam",
        "Underwater fog with depth-based visibility",
        "Blinn-Phong specular highlights"
      ],
      technicalBreakdown: {
        howItWorks: [
          "Vertex shader applies Gerstner wave formula: displacement based on wavelength, amplitude, and time",
          "Hull shader calculates tessellation factors based on camera distance",
          "Domain shader interpolates vertices and reapplies wave displacement",
          "Fragment shader composites multi-layer surface: reflections, refractions, foam, caustics",
          "GrabPass captures screen for refraction distortion",
          "Depth texture samples scene depth for edge foam and underwater fog"
        ],
        architecture: [
          "StylizedWater.shader — Main water shader (vertex/hull/domain/fragment)",
          "EnableDepthTexture.cs — Camera depth texture setup",
          "PlanarReflection.cs — Real-time reflection camera management"
        ],
        notableDetails: [
          "Hull/Domain shader pipeline enables up to 64x tessellation based on distance",
          "Gerstner waves provide realistic ocean motion vs simple sine waves",
          "Voronoi algorithm generates procedural caustic patterns without textures",
          "Dual-phase UV system for flow maps prevents obvious tiling",
          "Requires Shader Model 4.6+ and DirectX 11 for tessellation support"
        ]
      },
      setupUsage: {
        install: [
          "Clone repository: git clone https://github.com/SametKaras/stylized-water-shader.git",
          "Open project in Unity 2020.3+ (Built-in RP)",
          "Open Assets/Scenes/SampleScene.unity",
          "Attach EnableDepthTexture.cs to Main Camera",
          "Attach PlanarReflection.cs to water plane for reflections"
        ],
        quickStart: null,
        parameters: [
          { name: "Wave Amplitude", type: "Range", effect: "Height of wave displacement" },
          { name: "Wave Wavelength", type: "Range", effect: "Distance between wave peaks" },
          { name: "Tessellation Factor", type: "Range", effect: "Surface subdivision density" },
          { name: "Foam Threshold", type: "Range", effect: "Depth at which shoreline foam appears" },
          { name: "Caustics Intensity", type: "Range", effect: "Strength of underwater light patterns" }
        ]
      },
      challengesLearnings: [
        "Mastered GPU tessellation pipeline (hull/domain shader stages)",
        "Implemented physically-based Gerstner wave formula for realistic motion",
        "Learned Voronoi procedural generation for caustics without texture lookups",
        "Managed reflection camera synchronization with main camera"
      ],
      outcomes: [
        "Demonstrates 10+ advanced rendering techniques in a single shader",
        "Production-ready quality suitable for stylized game projects",
        "Includes detailed BREAKDOWN.md with mathematical foundations"
      ]
    },
    links: {
      github: "https://github.com/SametKaras/stylized-water-shader",
      demo: null
    },
    media: [
      { type: "gif", pathHint: "preview.gif", caption: "Water shader with waves, reflections, and caustics" }
    ]
  },
  {
    slug: "unity-scene-capture-api",
    title: "Unity Scene Capture API",
    year: 2025,
    category: "unity-tools",
    summary: "Production-ready scene capture system with multi-buffer output for ML dataset generation",
    oneLiner: "Production-ready scene capture system with multi-buffer output and batch processing for ML dataset generation.",
    stack: ["Unity", "C#", "HLSL", "Custom Editor"],
    tags: ["ML Datasets", "Multi-Buffer Capture", "Factory Pattern", "Bitwise Flags", "IDisposable", "Custom Inspector", "Computer Vision"],
    github: "https://github.com/SametKaras/Unity-Scene-Capture-API",
    featured: true,
    extendedCaseStudy: {
      whatItIs: "A flexible scene capture API for generating machine learning datasets from Unity scenes. Supports simultaneous Color/Depth/Normal buffer capture, 360° orbital rotation, batch processing, and procedural scene generation—all through a clean factory-based API.",
      keyFeatures: [
        "Multi-channel capture: Color, Depth (eye-space grayscale), Normal (world-space RGB)",
        "Batch processing with 360° orbital rotation around target",
        "Random scene generation with procedural object spawning",
        "Three factory method overloads for flexible camera instantiation",
        "Bitwise enum flags for channel selection (Color | Depth | Normals)",
        "IDisposable pattern for proper resource cleanup",
        "Custom Inspector UI with folder picker and runtime controls"
      ],
      technicalBreakdown: {
        howItWorks: [
          "CaptureSession creates or wraps a camera with specified resolution",
          "Replacement shaders (DepthGrayscale, NormalsRGB) swap rendering mode per channel",
          "Camera.RenderWithShader captures each buffer to RenderTexture",
          "Textures are encoded to PNG and saved to organized folder structure",
          "Coroutine-based batching captures multiple frames with WaitForEndOfFrame",
          "Multi-capture mode orbits camera around target at configurable radius"
        ],
        architecture: [
          "CaptureController.cs — MonoBehaviour component with Inspector UI",
          "CaptureSession.cs — Core API with factory methods and IDisposable",
          "CaptureControllerEditor.cs — Custom Inspector with folder picker",
          "DepthGrayscale.shader — Eye-space depth → grayscale",
          "NormalsRGB.shader — World-space normals → RGB channels"
        ],
        notableDetails: [
          "Factory pattern: Create(Camera), Create(Transform), Create(Vector3, Quaternion)",
          "Bitwise flags allow combinations: CaptureChannels.Color | CaptureChannels.Depth",
          "IDisposable destroys camera if API created it, skips if user-provided",
          "Coroutine yields ensure GPU completes rendering before capture",
          "Output organized: captures/{name}/color/, depth/, normal/"
        ]
      },
      setupUsage: {
        install: [
          "Clone repository to Unity project",
          "Add CaptureController component to any GameObject",
          "Configure channels, resolution, and save path in Inspector",
          "Press Space to capture or call TakeCapture() from code"
        ],
        quickStart: "using SceneCapture;\nusing (var session = CaptureSession.Create(Camera.main, \"Assets/Captures\"))\n{\n    session.Channels = CaptureSession.CaptureChannels.All;\n    session.Resolution = new Vector2Int(1920, 1080);\n    session.Capture(\"MyScene\");\n}",
        parameters: [
          { name: "Channels", type: "Flags", effect: "Which buffers to capture (Color/Depth/Normal)" },
          { name: "Resolution", type: "Vector2Int", effect: "Output image dimensions" },
          { name: "Capture Count", type: "Int", effect: "Number of frames in batch mode" },
          { name: "Rotation Radius", type: "Float", effect: "Orbital distance from target object" }
        ]
      },
      challengesLearnings: [
        "Designed clean factory API with multiple instantiation patterns",
        "Implemented bitwise enum flags for flexible feature combinations",
        "Managed camera lifecycle with IDisposable ownership tracking",
        "Built custom Inspector UI for enhanced usability",
        "Synchronized coroutine timing with GPU rendering pipeline"
      ],
      outcomes: [
        "Production-ready tool for generating ML training datasets",
        "Clean separation between MonoBehaviour wrapper and core API",
        "Demonstrates 5 professional C# patterns in practical context"
      ]
    },
    links: {
      github: "https://github.com/SametKaras/Unity-Scene-Capture-API",
      demo: null
    },
    media: [
      { type: "image", pathHint: "Screenshots/inspector.png", caption: "Custom Inspector UI" },
      { type: "image", pathHint: "Screenshots/output_example.png", caption: "Color, Depth, and Normal buffer outputs" }
    ]
  },
  {
    slug: "unity-rim-light-shader",
    title: "Rim Light Shader",
    year: 2025,
    category: "unity-shaders",
    summary: "Efficient Fresnel-based rim lighting shader with HDR support",
    oneLiner: "Efficient Fresnel-based rim lighting shader with HDR support and real-time parameter control.",
    stack: ["Unity", "HLSL", "ShaderLab"],
    tags: ["Fresnel Effect", "Rim Lighting", "HDR", "Surface Shader", "View-Dependent", "Emission"],
    github: "https://github.com/SametKaras/Unity-Rim-Light-Shader",
    featured: false,
    extendedCaseStudy: {
      whatItIs: "A custom surface shader implementing view-dependent rim lighting via the Fresnel effect. Features HDR color support for bloom compatibility, adjustable power curves for falloff control, and optimized single-pass rendering suitable for mobile platforms.",
      keyFeatures: [
        "Fresnel-based rim light calculation",
        "HDR color support for post-processing bloom",
        "Adjustable rim power for falloff sharpness",
        "Threshold control for edge appearance",
        "View-dependent intensity (changes with camera angle)",
        "PBR compatible with Unity's Standard lighting model",
        "Single-pass surface shader for mobile performance"
      ],
      technicalBreakdown: {
        howItWorks: [
          "Calculate dot product between surface normal (N) and view direction (V)",
          "Invert result: rim = 1 - dot(N, V) — edges get higher values",
          "Apply smoothstep for soft threshold transitions",
          "Apply pow() for artistic falloff control",
          "Output to Emission channel for self-illumination effect"
        ],
        architecture: [
          "RimLightShader.shader — Single-file surface shader",
          "Properties block — Rim Color (HDR), Power, Threshold",
          "surf() function — Main surface calculation logic"
        ],
        notableDetails: [
          "Fresnel effect: objects glow at edges where surface is perpendicular to view",
          "smoothstep provides smooth falloff vs hard threshold cutoff",
          "pow() exponent controls how sharply rim fades toward center",
          "Emission channel enables glow without external light sources",
          "LOD 200 ensures compatibility across quality levels"
        ]
      },
      setupUsage: {
        install: [
          "Copy RimLightShader.shader to Assets/Shaders/",
          "Create new material: Right-click → Create → Material",
          "Select shader: Custom/RimLightShader",
          "Apply material to 3D object"
        ],
        quickStart: null,
        parameters: [
          { name: "Rim Color", type: "Color (HDR)", effect: "Edge light color, use HDR values for bloom" },
          { name: "Rim Power", type: "Range", effect: "Falloff sharpness (higher = tighter edge)" },
          { name: "Rim Threshold", type: "Range", effect: "When rim effect starts appearing" }
        ]
      },
      challengesLearnings: [
        "Understood Fresnel effect physics and its shader implementation",
        "Applied smoothstep and pow for artistic falloff control",
        "Learned how Emission channel enables self-illumination",
        "Optimized for mobile with minimal texture lookups"
      ],
      outcomes: [
        "Clean, reusable rim light implementation",
        "Educational resource for view-dependent shader techniques",
        "Suitable for characters, UI highlights, and stylized effects"
      ]
    },
    links: {
      github: "https://github.com/SametKaras/Unity-Rim-Light-Shader",
      demo: null
    },
    media: [
      { type: "gif", pathHint: "preview.gif", caption: "Rim light effect on rotating sphere" }
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI / Computer Vision" },
  { id: "unity", label: "Unity / Games" },
  { id: "unity-shaders", label: "Unity / Shaders" },
  { id: "unity-tools", label: "Unity / Tools" },
  { id: "robotics", label: "Robotics / ROS" },
  { id: "backend", label: "Backend / APIs" }
] as const;

// Helper to get all Unity-related projects
export const getUnityProjects = () =>
  projects.filter(p => p.category === "unity" || p.category === "unity-shaders" || p.category === "unity-tools");

// Helper to check if project has extended case study
export const hasExtendedCaseStudy = (project: Project): boolean =>
  !!project.extendedCaseStudy;
