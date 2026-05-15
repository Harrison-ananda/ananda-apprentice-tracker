const LEVELS = [
  {
    id: "level-1",
    title: "Level 1 Apprentice: Salon Assistant",
    subtitle: "developing your eye, hand, and heart",
    responsibilities: [
      "Opening: setting up the salon for the day",
      "Assisting the salon flow during the day",
      "Keeping up with Apprentice Projects",
      "Closing: resetting the salon for the day and preparing it for the next",
    ],
    sections: [
      { name: "Requirements", tasks: ["Attend core education classes", "Download and learn Phorest Go app", "Read employee handbook and pass quiz"] },
      { name: "Salon etiquette", tasks: ["Teamwork", "Client care", "Shared spaces", "Station presentation and preparedness", "Learning how to shadow a mentor"] },
      { name: "Services", tasks: ["Shampoo and shampoo bowl etiquette", "Blow dry: round brush", "Blow dry: flat brush", "Blow dry: natural texture / diffuse", "Wash and style within 1 hour"] },
    ],
  },
  {
    id: "level-2",
    title: "Level 2 Apprentice: Salon Assistant With Shadow Days",
    subtitle: "developing your eye, hand, and heart",
    responsibilities: [
      "Salon assistant responsibilities remain the same",
      "Respectfully observe your assigned mentor",
      "Assist your mentor when asked",
      "Stick with your mentor like their shadow",
    ],
    sections: [
      { name: "Requirements", tasks: ["Get your license", "Continue attending classes"] },
      { name: "Salon etiquette", tasks: ["Client/model recruitment"] },
      { name: "Basics", tasks: ["Sectioning", "Clipping"] },
      { name: "ananda hair studio method", tasks: ["Consultation", "Treatment knowledge", "Product knowledge", "Recapping", "Rebooking"] },
      { name: "Haircuts", tasks: ["Long layers", "Bob", "Fringe", "Classic short / scissor over comb", "Curly hair"] },
    ],
  },
  {
    id: "level-3",
    title: "Level 3 Apprentice: Salon Assistant / Shadow Days / Model Days",
    subtitle: "developing your eye, hand, and heart",
    responsibilities: [
      "Salon assistant and shadow day responsibilities remain the same",
      "Care for clients and execute services to the best of your ability",
      "Use each client as an opportunity to practice excellent customer service",
      "Use each client as an opportunity to strengthen your technical skill",
      "Consult with stylists and mentors for best strategies for each client/model",
      "Act as a salon assistant when you are not booked",
    ],
    sections: [
      { name: "Requirements", tasks: ["Continue attending classes", "Client/model recruitment"] },
      { name: "Haircuts", tasks: ["Bob with graduation", "Short / pixie", "Fade", "Shag"] },
      { name: "Color", tasks: ["Balayage", "Bleach and tone", "Color correction"] },
      { name: "Timing", tasks: ["Complete a haircut in 1-1.5 hours", "Base/single process in 1.5-2 hours", "Partial highlight in 2-2.5 hours", "Full highlight in 3-3.5 hours"] },
    ],
  },
  {
    id: "level-4",
    title: "Level 4 Apprentice: Stylist Assistant / Model Days",
    subtitle: "developing your eye, hand, and heart",
    responsibilities: ["Stylist assistant responsibilities", "Model day responsibilities remain the same"],
    sections: [
      {
        name: "Requirements",
        tasks: [
          "Rebooking clients",
          "Product recommendations / recapping",
          "Client education in chair",
          "Leadership approval",
          "Add detailed notes to every client: cut and color",
          "Before and after photos",
          "Continue attending classes",
          "Dressing appropriately",
        ],
      },
    ],
  },
];

const DEFAULT_RESOURCES = [
  {
    id: "program-overview",
    title: "Program overview",
    category: "Expectations",
    body:
      "Apprentices are a huge asset to ananda hair studio and are future stylists. The program is built to help you grow your eye, hand, and heart through education, salon support, observing mentors, and model days.",
  },
  {
    id: "objective",
    title: "Objective",
    category: "Expectations",
    body:
      "The goal is to guide you toward a professional hairstylist career through elevated education and support, while helping assess current strengths and areas for growth.",
  },
  {
    id: "how-the-program-works",
    title: "How the program works",
    category: "How to",
    body:
      "You will assist and observe ananda stylists, mentors, and coordinators while helping maintain salon cleanliness and organization. You progress at your own speed through group classes, model days, and mentor feedback.",
  },
  {
    id: "path-to-stylist",
    title: "Path to becoming a stylist",
    category: "Expectations",
    body:
      "The apprentice program is the pathway to becoming a commission stylist. You move forward through education, training, shadowing, model work, professional salon skills, and readiness conversations with mentors and leadership.",
  },
  {
    id: "progress-at-your-own-speed",
    title: "Progressing at your own speed",
    category: "Expectations",
    body:
      "The timeline is individual. You progress at your own speed, and you become a commission stylist when you and the mentor team feel you are ready.",
  },
  {
    id: "shift-types",
    title: "Shift types",
    category: "Shift types",
    body:
      "The guide starts with Level 1 Salon Assistant shifts: support salon flow, clean, do laundry, restock, and help wherever needed. Coordinators are the main point of direction, but any team member may ask for help.",
  },
  {
    id: "salon-assistant-shift",
    title: "Salon assistant shift",
    category: "Shift types",
    body:
      "Your focus is supporting the salon. Cleaning, laundry, restocking, resetting, helping stylists, and keeping salon flow moving are all part of the shift. Stay busy and engaged with tasks that benefit the salon for the duration of your shift.",
  },
  {
    id: "shadow-day",
    title: "Shadow day",
    category: "Shift types",
    body:
      "On shadow days, observe your assigned mentor respectfully, assist when asked, and stay close enough to learn from how the mentor consults, works, communicates, and manages the client experience.",
  },
  {
    id: "model-day",
    title: "Model day",
    category: "Shift types",
    body:
      "Model days are practice opportunities to strengthen technical skill, customer service, consultation, timing, product knowledge, and client care while getting support from mentors and stylists.",
  },
  {
    id: "salon-assistant-expectations",
    title: "Salon assistant expectations",
    category: "Shift types",
    body:
      "Salon assisting requires constant movement and awareness. If you see something out of place, pick it up. If something needs to be cleaned, reset, or restocked, take care of it without waiting to be asked.",
  },
  {
    id: "break-rules",
    title: "Break rules",
    category: "Policies",
    body:
      "Use the full PDF for the current break policy. This section is ready for Britt or leadership to add the exact break rules apprentices should follow.",
  },
  {
    id: "cleaning-resetting",
    title: "Cleaning and resetting",
    category: "How to",
    body:
      "A major part of the apprentice role is maintaining the salon environment. Keep shared spaces, stations, laundry, tools, and the overall salon flow clean, prepared, and professional.",
  },
  {
    id: "who-to-ask",
    title: "Who to ask for direction",
    category: "FAQ",
    body:
      "Coordinators are your main point of direction during salon assistant shifts. Any team member may also ask for help, so stay receptive and communicate when you are unsure what should come next.",
  },
  {
    id: "when-not-booked",
    title: "What to do when you are not booked",
    category: "FAQ",
    body:
      "When you are not booked with a model or client, act as a salon assistant. Support the salon, clean and reset spaces, restock, help the flow of the day, and look for useful work.",
  },
  {
    id: "classes-and-models",
    title: "Classes and model recruitment",
    category: "How to",
    body:
      "Continue attending education classes and recruiting clients or models as required for your level. These are part of your progress through the program and help build readiness for commission stylist work.",
  },
  {
    id: "professionalism",
    title: "Professionalism",
    category: "Expectations",
    body:
      "Show up prepared, dressed appropriately, engaged, and ready to contribute. The program includes technical growth and professional behavior: teamwork, client care, shared spaces, and salon awareness all matter.",
  },
];

const STORAGE_KEY = "apprentice-growth-tracker-v1";
const state = loadState();
const route = new URLSearchParams(window.location.search);
const isApprenticeMode = route.get("view") === "apprentice";
const apprenticeToken = route.get("token");
const cloudConfig = window.ANANDA_APP_CONFIG || {
  supabaseUrl: "https://plxvpthbyyobrfxvhylu.supabase.co",
  supabaseAnonKey: "sb_publishable_8gbbGBF-2h2IeYf97Dak2w_By08DLVE",
  appBaseUrl: "https://jolly-puppy-6e68f4.netlify.app/",
};
let cloudClient = null;
let authListenerReady = false;
let staffLoadRun = 0;
let pendingCloudSaves = 0;
let cloudReady = false;
let staffSession = null;
let activeId = route.get("apprentice") || state.activeId || state.apprentices[0]?.id || null;
let openLevelIds = new Set();
let apprenticeLinkError = "";

const els = {
  apprenticeList: document.querySelector("#apprenticeList"),
  addForm: document.querySelector("#addApprenticeForm"),
  loginScreen: document.querySelector("#loginScreen"),
  loginScreenForm: document.querySelector("#loginScreenForm"),
  loginEmail: document.querySelector("#loginEmail"),
  loginPassword: document.querySelector("#loginPassword"),
  loginMessage: document.querySelector("#loginMessage"),
  authPanel: document.querySelector("#authPanel"),
  loginForm: document.querySelector("#loginForm"),
  staffEmail: document.querySelector("#staffEmail"),
  staffPassword: document.querySelector("#staffPassword"),
  authStatus: document.querySelector("#authStatus"),
  authEmail: document.querySelector("#authEmail"),
  signOut: document.querySelector("#signOut"),
  cloudStatus: document.querySelector("#cloudStatus"),
  nameField: document.querySelector("#apprenticeName"),
  search: document.querySelector("#apprenticeSearch"),
  empty: document.querySelector("#emptyState"),
  profile: document.querySelector("#profileView"),
  roleBanner: document.querySelector("#roleBanner"),
  activeName: document.querySelector("#activeName"),
  startDate: document.querySelector("#startDate"),
  currentLevel: document.querySelector("#currentLevel"),
  mentorName: document.querySelector("#mentorName"),
  overallPercent: document.querySelector("#overallPercent"),
  levelSummary: document.querySelector("#levelSummary"),
  levelsPanel: document.querySelector("#levelsPanel"),
  resourcesPanel: document.querySelector("#resourcesPanel"),
  questionsPanel: document.querySelector("#questionsPanel"),
  notesPanel: document.querySelector("#notesPanel"),
  oneOnOnesPanel: document.querySelector("#oneOnOnesPanel"),
  filesPanel: document.querySelector("#filesPanel"),
  resourcesList: document.querySelector("#resourcesList"),
  questionsList: document.querySelector("#questionsList"),
  notesList: document.querySelector("#notesList"),
  oneOnOnesList: document.querySelector("#oneOnOnesList"),
  filesList: document.querySelector("#filesList"),
  addResource: document.querySelector("#addResource"),
  addQuestion: document.querySelector("#addQuestion"),
  addNote: document.querySelector("#addNote"),
  addOneOnOne: document.querySelector("#addOneOnOne"),
  profileFileUpload: document.querySelector("#profileFileUpload"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  printProfile: document.querySelector("#printProfile"),
  deleteApprentice: document.querySelector("#deleteApprentice"),
  themeToggle: document.querySelector("#themeToggle"),
  copyApprenticeLink: document.querySelector("#copyApprenticeLink"),
};

function loadState() {
  const fallback = { apprentices: [], activeId: null, theme: "light", resources: DEFAULT_RESOURCES };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...fallback, ...saved, resources: mergeDefaultResources(saved?.resources) };
  } catch {
    return fallback;
  }
}

function mergeDefaultResources(savedResources = []) {
  const saved = Array.isArray(savedResources) ? savedResources : [];
  const savedIds = new Set(saved.map((resource) => resource.id));
  return [...saved, ...DEFAULT_RESOURCES.filter((resource) => !savedIds.has(resource.id))];
}

function saveState() {
  state.activeId = activeId;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setCloudStatus(message) {
  if (els.cloudStatus) els.cloudStatus.textContent = message;
  if (els.loginMessage) els.loginMessage.textContent = message;
}

function makeCloudClient() {
  if (!cloudConfig?.supabaseUrl || !cloudConfig?.supabaseAnonKey || !window.supabase?.createClient) return null;
  return window.supabase.createClient(cloudConfig.supabaseUrl, cloudConfig.supabaseAnonKey);
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing?.dataset.loaded === "true") {
      resolve();
      return;
    }
    const script = existing || document.createElement("script");
    script.src = src;
    script.dataset.supabaseFallback = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = reject;
    if (!existing) document.head.appendChild(script);
  });
}

async function ensureCloudClient() {
  if (cloudClient) return cloudClient;
  cloudClient = makeCloudClient();
  if (cloudClient) return cloudClient;

  const sources = [
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js",
    "https://unpkg.com/@supabase/supabase-js@2/dist/umd/supabase.min.js",
  ];
  for (const source of sources) {
    try {
      await loadScriptOnce(source);
      cloudClient = makeCloudClient();
      if (cloudClient) return cloudClient;
    } catch {
      // Try the next source.
    }
  }
  return null;
}

function setupAuthListener() {
  if (!cloudClient || authListenerReady) return;
  authListenerReady = true;
  cloudClient.auth.onAuthStateChange(async (event, session) => {
    staffSession = session;
    renderAuth();
    if (event === "SIGNED_OUT") {
      clearStaffView();
    }
  });
}

async function rpcWithApprenticeToken(functionName) {
  const first = await cloudClient.rpc(functionName, { input_token: apprenticeToken });
  if (!first.error) return first;
  const message = first.error.message || "";
  if (message.includes("input_token") || message.includes("Could not find the function") || first.error.code === "PGRST202") {
    return cloudClient.rpc(functionName, { token: apprenticeToken });
  }
  return first;
}

function withTimeout(promise, message, ms = 12000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

function trackCloudSave(promise, label = "Saving") {
  pendingCloudSaves += 1;
  let failed = false;
  setCloudStatus(`${label}...`);
  return withTimeout(promise, `${label} timed out.`, 10000)
    .then((result) => {
      const error = result?.error;
      if (error) {
        failed = true;
        setCloudStatus(`${label} failed: ${error.message}`);
        return result;
      }
      return result;
    })
    .catch((error) => {
      failed = true;
      setCloudStatus(`${label} failed: ${error.message}`);
      return { error };
    })
    .finally(() => {
      pendingCloudSaves = Math.max(0, pendingCloudSaves - 1);
      if (!failed && pendingCloudSaves === 0 && cloudReady) setCloudStatus("Live mode connected");
    });
}

function dbApprenticeToApp(row) {
  return {
    id: row.id,
    name: row.name,
    startDate: row.start_date || "",
    mentor: row.mentor || "",
    currentLevel: row.current_level || "level-1",
    shareToken: row.share_token || "",
    progress: {},
    notes: [],
    oneOnOnes: [],
    questions: [],
    files: [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function appApprenticeToDb(apprentice) {
  return {
    name: apprentice.name,
    start_date: apprentice.startDate || null,
    mentor: apprentice.mentor || null,
    current_level: apprentice.currentLevel || "level-1",
    updated_at: new Date().toISOString(),
  };
}

function dbProgressToApp(row) {
  return {
    complete: row.complete,
    completedOn: row.completed_on || "",
    taughtBy: row.taught_by || "",
    method: row.method || "",
    notes: row.notes || "",
  };
}

function appProgressToDb(apprenticeId, taskKey, item) {
  return {
    apprentice_id: apprenticeId,
    task_key: taskKey,
    complete: Boolean(item.complete),
    completed_on: item.completedOn || null,
    taught_by: item.taughtBy || null,
    method: item.method || null,
    notes: item.notes || null,
    updated_at: new Date().toISOString(),
  };
}

function dbQuestionToApp(row) {
  return {
    id: row.id,
    date: row.question_date || "",
    body: row.body || "",
    status: row.status || "Open",
    createdAt: row.created_at,
  };
}

function dbNoteToApp(row) {
  return {
    id: row.id,
    date: row.note_date || "",
    body: row.body || "",
    createdAt: row.created_at,
  };
}

function dbOneOnOneToApp(row) {
  return {
    id: row.id,
    date: row.meeting_date || "",
    subject: row.subject || "",
    body: row.body || "",
    createdAt: row.created_at,
  };
}

function dbResourceToApp(row) {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    body: row.body,
    sortOrder: row.sort_order || 0,
  };
}

function createApprentice(name) {
  const now = new Date().toISOString();
  const progress = {};
  LEVELS.forEach((level) => {
    level.sections.forEach((section) => {
      section.tasks.forEach((task) => {
        const id = taskId(level.id, section.name, task);
        progress[id] = { complete: false, completedOn: "", taughtBy: "", notes: "", method: "" };
      });
    });
  });

  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    startDate: "",
    mentor: "",
    currentLevel: "level-1",
    progress,
    notes: [],
    oneOnOnes: [],
    questions: [],
    files: [],
    createdAt: now,
    updatedAt: now,
  };
}

function taskId(levelId, section, task) {
  return `${levelId}:${section}:${task}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function activeApprentice() {
  return state.apprentices.find((apprentice) => apprentice.id === activeId) || null;
}

function ensureApprenticeShape(apprentice) {
  if (!apprentice) return;
  apprentice.questions ||= [];
  apprentice.notes ||= [];
  apprentice.oneOnOnes ||= [];
  apprentice.files ||= [];
  apprentice.progress ||= {};
  LEVELS.forEach((level) => {
    level.sections.forEach((section) => {
      section.tasks.forEach((task) => {
        const id = taskId(level.id, section.name, task);
        apprentice.progress[id] ||= { complete: false, completedOn: "", taughtBy: "", notes: "", method: "" };
      });
    });
  });
}

function percentFor(apprentice, levelId = null) {
  const ids = allTaskIds(levelId);
  const complete = ids.filter((id) => apprentice.progress[id]?.complete).length;
  return ids.length ? Math.round((complete / ids.length) * 100) : 0;
}

function allTaskIds(levelId = null) {
  return LEVELS.filter((level) => !levelId || level.id === levelId).flatMap((level) =>
    level.sections.flatMap((section) => section.tasks.map((task) => taskId(level.id, section.name, task))),
  );
}

async function initApp() {
  await ensureCloudClient();
  setupAuthListener();

  if (!cloudClient) {
    setCloudStatus("Live setup could not load Supabase. Refresh once, or check browser blockers.");
    render();
    return;
  }

  if (isApprenticeMode && apprenticeToken) {
    await loadApprenticeLinkData();
    render();
    return;
  }

  const { data } = await cloudClient.auth.getSession();
  staffSession = data.session;
  renderAuth();
  if (staffSession) {
    await loadStaffData();
  } else {
    setCloudStatus("Live mode: staff login required");
  }
  render();
}

function renderAuth() {
  const needsStaffLogin = Boolean(cloudClient && !staffSession && !isApprenticeMode);
  document.body.classList.toggle("auth-required", needsStaffLogin);
  els.loginScreen?.classList.toggle("hidden", !needsStaffLogin);
  els.authPanel?.classList.toggle("hidden", isApprenticeMode);
  els.loginForm?.classList.add("hidden");
  els.authStatus?.classList.toggle("hidden", !staffSession);
  if (els.authEmail) els.authEmail.textContent = staffSession?.user?.email || "";
}

function clearStaffView(message = "Signed out") {
  staffSession = null;
  cloudReady = false;
  state.apprentices = [];
  activeId = null;
  if (els.staffPassword) els.staffPassword.value = "";
  if (els.loginPassword) els.loginPassword.value = "";
  setCloudStatus(message);
  renderAuth();
  render();
}

async function loadStaffData() {
  const run = ++staffLoadRun;
  setCloudStatus("Checking staff access...");
  try {
    const { data: staffAllowed, error: staffError } = await withTimeout(cloudClient.rpc("is_staff"), "Staff access check timed out.");
    if (run !== staffLoadRun) return;
    if (staffError || !staffAllowed) {
      cloudReady = false;
      const userId = staffSession?.user?.id;
      setCloudStatus(userId ? `Logged in, but this user still needs staff access in Supabase. User ID: ${userId}` : "Logged in, but this user still needs staff access in Supabase.");
      return;
    }
  } catch (error) {
    if (run !== staffLoadRun) return;
    cloudReady = false;
    setCloudStatus(`Could not check staff access: ${error.message}`);
    return;
  }

  cloudReady = true;
  setCloudStatus("Loading tracker data...");
  let apprenticeRows;
  let apprenticeError;
  let progressRows;
  let questionRows;
  let noteRows;
  let oneOnOneRows;
  let resourceRows;
  try {
    const results = await withTimeout(
      Promise.all([
        cloudClient.rpc("get_staff_apprentices"),
        cloudClient.rpc("get_staff_task_progress"),
        cloudClient.from("apprentice_questions").select("*").order("created_at", { ascending: false }),
        cloudClient.from("staff_notes").select("*").order("created_at", { ascending: false }),
        cloudClient.rpc("get_staff_one_on_ones"),
        cloudClient.from("resources").select("*").order("sort_order").order("title"),
      ]),
      "Tracker data load timed out.",
      15000,
    );
    if (run !== staffLoadRun) return;
    apprenticeRows = results[0].data;
    apprenticeError = results[0].error;
    progressRows = results[1].data;
    questionRows = results[2].data;
    noteRows = results[3].data;
    oneOnOneRows = results[4].data;
    resourceRows = results[5].data;
    const loadError = results.find((result) => result.error)?.error;
    if (loadError) throw new Error(loadError.message);
  } catch (error) {
    if (run !== staffLoadRun) return;
    cloudReady = false;
    setCloudStatus(`Could not load tracker data: ${error.message}`);
    return;
  }

  if (apprenticeError) {
    cloudReady = false;
    setCloudStatus("Live setup needed: run the Supabase SQL and add staff access");
    return;
  }

  state.apprentices = (apprenticeRows || []).map(dbApprenticeToApp);
  state.resources = (resourceRows || []).map(dbResourceToApp);
  const byId = new Map(state.apprentices.map((apprentice) => [apprentice.id, apprentice]));
  (progressRows || []).forEach((row) => {
    const apprentice = byId.get(row.apprentice_id);
    if (apprentice) apprentice.progress[row.task_key] = dbProgressToApp(row);
  });
  (questionRows || []).forEach((row) => {
    const apprentice = byId.get(row.apprentice_id);
    if (apprentice) apprentice.questions.push(dbQuestionToApp(row));
  });
  (noteRows || []).forEach((row) => {
    const apprentice = byId.get(row.apprentice_id);
    if (apprentice) apprentice.notes.push(dbNoteToApp(row));
  });
  (oneOnOneRows || []).forEach((row) => {
    const apprentice = byId.get(row.apprentice_id);
    if (apprentice) apprentice.oneOnOnes.push(dbOneOnOneToApp(row));
  });
  activeId = activeId && byId.has(activeId) ? activeId : state.apprentices[0]?.id || null;
  state.apprentices.forEach(ensureApprenticeShape);
  setCloudStatus(`Live mode connected: ${state.apprentices.length} apprentices, ${(progressRows || []).length} saved checkoffs`);
}

async function loadApprenticeLinkData() {
  cloudReady = true;
  document.body.classList.add("apprentice-mode");
  setCloudStatus("Apprentice link mode");
  let apprenticeRows;
  let apprenticeError;
  let progressRows;
  let questionRows;
  let oneOnOneRows;
  let resourceRows;
  try {
    const results = await withTimeout(
      Promise.all([
        rpcWithApprenticeToken("get_apprentice_by_token"),
        rpcWithApprenticeToken("get_progress_by_token"),
        rpcWithApprenticeToken("get_questions_by_token"),
        cloudClient.from("resources").select("*").order("sort_order").order("title"),
      ]),
      "Apprentice link load timed out.",
      12000,
    );
    apprenticeRows = results[0].data;
    apprenticeError = results[0].error;
    progressRows = results[1].data;
    questionRows = results[2].data;
    resourceRows = results[3].data;
  } catch (error) {
    state.apprentices = [];
    activeId = null;
    apprenticeLinkError = `Could not open apprentice link: ${error.message}`;
    setCloudStatus(apprenticeLinkError);
    return;
  }

  if (apprenticeError || !apprenticeRows?.length) {
    state.apprentices = [];
    activeId = null;
    apprenticeLinkError = apprenticeError ? `Could not open apprentice link: ${apprenticeError.message}` : "This apprentice link does not match a live apprentice record. Copy a fresh link from the staff view after the apprentice has saved.";
    setCloudStatus(apprenticeLinkError);
    return;
  }

  const apprentice = dbApprenticeToApp({ ...apprenticeRows[0], share_token: apprenticeToken });
  (progressRows || []).forEach((row) => {
    apprentice.progress[row.task_key] = dbProgressToApp(row);
  });
  apprentice.questions = (questionRows || []).map(dbQuestionToApp);
  const oneOnOneResult = await rpcWithApprenticeToken("get_one_on_ones_by_token").catch((error) => ({ error }));
  apprentice.oneOnOnes = oneOnOneResult?.error ? [] : (oneOnOneResult.data || []).map(dbOneOnOneToApp);
  state.apprentices = [apprentice];
  state.resources = (resourceRows || []).map(dbResourceToApp);
  activeId = apprentice.id;
  ensureApprenticeShape(apprentice);
  apprenticeLinkError = "";
  setCloudStatus("Apprentice link connected");
}

function render() {
  document.documentElement.dataset.theme = state.theme || "light";
  document.body.classList.toggle("apprentice-mode", isApprenticeMode);
  renderAuth();
  renderApprenticeList();
  const apprentice = activeApprentice();
  ensureApprenticeShape(apprentice);
  if (!apprentice && isApprenticeMode) {
    els.empty.querySelector("h2").textContent = cloudClient ? "This apprentice link could not be opened." : "This apprentice page needs the hosted version.";
    els.empty.querySelector("p:last-child").textContent =
      apprenticeLinkError || (cloudClient
        ? "Ask staff to send a fresh private apprentice link."
        : "This local demo stores data in one browser. To email private apprentice links, connect the app to shared online storage.");
  }
  els.empty.classList.toggle("hidden", Boolean(apprentice));
  els.profile.classList.toggle("hidden", !apprentice);
  if (!apprentice) return;

  els.profile.classList.toggle("readonly", isApprenticeMode);
  els.roleBanner.classList.toggle("hidden", !isApprenticeMode);
  els.roleBanner.textContent = isApprenticeMode
    ? "Apprentice view: progress is read-only. You can add questions and things you want to work on."
    : "";

  els.activeName.value = apprentice.name;
  els.activeName.disabled = isApprenticeMode;
  els.startDate.value = apprentice.startDate || "";
  els.startDate.disabled = isApprenticeMode;
  els.mentorName.value = apprentice.mentor || "";
  els.mentorName.disabled = isApprenticeMode;
  els.currentLevel.innerHTML = LEVELS.map((level) => `<option value="${level.id}">${escapeHtml(level.title.split(":")[0])}</option>`).join("");
  els.currentLevel.value = apprentice.currentLevel || "level-1";
  els.currentLevel.disabled = isApprenticeMode;
  els.overallPercent.textContent = `${percentFor(apprentice)}%`;
  renderLevelSummary(apprentice);
  renderLevels(apprentice);
  renderResources();
  renderQuestions(apprentice);
  renderOneOnOnes(apprentice);
  renderNotes(apprentice);
  renderFiles(apprentice);
  updateTabVisibility();
}

function renderApprenticeList() {
  const query = els.search.value.trim().toLowerCase();
  const apprentices = state.apprentices
    .filter((apprentice) => apprentice.name.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name));

  els.apprenticeList.innerHTML = apprentices
    .map((apprentice) => {
      const percent = percentFor(apprentice);
      return `
        <button class="apprentice-item ${apprentice.id === activeId ? "active" : ""}" data-id="${apprentice.id}" type="button">
          <strong>${escapeHtml(apprentice.name)}</strong>
          <span class="muted">${percent}% complete</span>
          <span class="mini-progress" aria-hidden="true"><span style="width:${percent}%"></span></span>
        </button>
      `;
    })
    .join("");
}

function renderLevelSummary(apprentice) {
  els.levelSummary.innerHTML = LEVELS.map((level) => {
    const percent = percentFor(apprentice, level.id);
    const complete = allTaskIds(level.id).filter((id) => apprentice.progress[id]?.complete).length;
    const total = allTaskIds(level.id).length;
    return `
      <div class="level-pill">
        <strong>${escapeHtml(level.title.split(":")[0])}</strong>
        <span>${complete} of ${total} checked off</span>
        <div class="level-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
      </div>
    `;
  }).join("");
}

function renderLevels(apprentice) {
  els.levelsPanel.innerHTML = LEVELS.map((level) => {
    const percent = percentFor(apprentice, level.id);
    if (!openLevelIds.size) openLevelIds.add(apprentice.currentLevel || "level-1");
    const isOpen = openLevelIds.has(level.id);
    const rows = level.sections
      .map((section) => {
        const taskRows = section.tasks
          .map((task) => {
            const id = taskId(level.id, section.name, task);
            const item = apprentice.progress[id] || {};
            return `
              <div class="task-row ${item.complete ? "complete" : ""}" data-task="${id}">
                <input type="checkbox" ${item.complete ? "checked" : ""} ${isApprenticeMode ? "disabled" : ""} aria-label="Mark ${escapeHtml(task)} complete" data-field="complete" />
                <div class="task-title">
                  <strong>${escapeHtml(task)}</strong>
                  <span>${escapeHtml(section.name)}</span>
                </div>
                <label>
                  Date
                  <input type="date" value="${escapeAttr(item.completedOn || "")}" data-field="completedOn" ${isApprenticeMode ? "disabled" : ""} />
                </label>
                <label>
                  Taught by
                  <input type="text" value="${escapeAttr(item.taughtBy || "")}" data-field="taughtBy" placeholder="Name" ${isApprenticeMode ? "disabled" : ""} />
                </label>
                <button class="details-button" type="button" data-action="toggle-details" title="Details" aria-label="Show details">⋯</button>
                <div class="task-details hidden">
                  <label>
                    How it was done
                    <input type="text" value="${escapeAttr(item.method || "")}" data-field="method" placeholder="Class, model day, shadowing..." ${isApprenticeMode ? "disabled" : ""} />
                  </label>
                  <label>
                    Notes
                    <textarea data-field="notes" placeholder="What happened, feedback, next step" ${isApprenticeMode ? "disabled" : ""}>${escapeHtml(item.notes || "")}</textarea>
                  </label>
                </div>
              </div>
            `;
          })
          .join("");
        return taskRows;
      })
      .join("");

    return `
      <details class="level-card" data-level="${level.id}" ${isOpen ? "open" : ""}>
        <summary>
          <div>
            <p class="eyebrow">${escapeHtml(level.subtitle)}</p>
            <h2>${escapeHtml(level.title)}</h2>
            <p class="responsibilities">${escapeHtml(level.responsibilities.join(" • "))}</p>
          </div>
          <span class="collapse-indicator" aria-hidden="true"></span>
          <div class="overall">
            <span>${percent}%</span>
            <p>level progress</p>
          </div>
        </summary>
        <div class="task-list">${rows}</div>
      </details>
    `;
  }).join("");
}

function renderResources() {
  const resources = mergeDefaultResources(state.resources);
  state.resources = resources;
  els.resourcesList.innerHTML = resources
    .map((resource) => `
      <details class="resource-card" data-resource="${resource.id}">
        <summary>
          <span>
            <strong>${escapeHtml(resource.title)}</strong>
            <em>${escapeHtml(resource.category || "Resource")}</em>
          </span>
        </summary>
        ${
          isApprenticeMode
            ? `<p>${escapeHtml(resource.body || "")}</p>`
            : `
              <label>
                Title
                <input type="text" value="${escapeAttr(resource.title || "")}" data-resource-field="title" />
              </label>
              <label>
                Category
                <input type="text" value="${escapeAttr(resource.category || "")}" data-resource-field="category" />
              </label>
              <label>
                Details
                <textarea data-resource-field="body">${escapeHtml(resource.body || "")}</textarea>
              </label>
              <button class="danger" type="button" data-action="delete-resource">Delete resource</button>
            `
        }
      </details>
    `)
    .join("");
}

function renderQuestions(apprentice) {
  if (!apprentice.questions.length) {
    els.questionsList.innerHTML = `<p class="muted">No questions or focus areas yet.</p>`;
    return;
  }
  els.questionsList.innerHTML = apprentice.questions
    .map((question) => {
      const isSavedQuestion = /^[0-9a-f-]{36}$/i.test(question.id);
      const apprenticeCanEdit = isApprenticeMode && !isSavedQuestion;
      const locked = isApprenticeMode && isSavedQuestion;
      return `
        <article class="question-card" data-question="${question.id}">
          <label>
            Date
            <input type="date" value="${escapeAttr(question.date)}" data-question-field="date" ${locked ? "disabled" : ""} />
          </label>
          <label>
            Question or focus area
            <textarea data-question-field="body" placeholder="What do you want help with?" ${locked ? "disabled" : ""}>${escapeHtml(question.body)}</textarea>
          </label>
          <label>
            Status
            <select data-question-field="status" ${isApprenticeMode ? "disabled" : ""}>
              ${["Open", "Working on it", "Answered"].map((status) => `<option ${question.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </label>
          <button class="danger ${isApprenticeMode && !apprenticeCanEdit ? "hidden" : ""}" type="button" data-action="delete-question">Delete</button>
        </article>
      `;
    })
    .join("");
}

function renderNotes(apprentice) {
  if (!apprentice.notes.length) {
    els.notesList.innerHTML = `<p class="muted">No notes yet.</p>`;
    return;
  }
  els.notesList.innerHTML = apprentice.notes
    .map((note) => `
      <article class="note-card" data-note="${note.id}">
        <label>
          Date
          <input type="date" value="${escapeAttr(note.date)}" data-note-field="date" />
        </label>
        <label>
          Note
          <textarea data-note-field="body">${escapeHtml(note.body)}</textarea>
        </label>
        <button class="danger" type="button" data-action="delete-note">Delete</button>
      </article>
    `)
    .join("");
}

function renderOneOnOnes(apprentice) {
  if (!apprentice.oneOnOnes.length) {
    els.oneOnOnesList.innerHTML = `<p class="muted">No one-on-ones logged yet.</p>`;
    return;
  }
  els.oneOnOnesList.innerHTML = apprentice.oneOnOnes
    .map((meeting) => `
      <article class="note-card one-on-one-card" data-one-on-one="${meeting.id}">
        <label>
          Date
          <input type="date" value="${escapeAttr(meeting.date)}" data-one-on-one-field="date" ${isApprenticeMode ? "disabled" : ""} />
        </label>
        <label>
          Subject
          <input type="text" value="${escapeAttr(meeting.subject)}" data-one-on-one-field="subject" placeholder="What did you cover?" ${isApprenticeMode ? "disabled" : ""} />
        </label>
        <label>
          Notes
          <textarea data-one-on-one-field="body" placeholder="Conversation notes, next steps, follow-up" ${isApprenticeMode ? "disabled" : ""}>${escapeHtml(meeting.body)}</textarea>
        </label>
        <button class="danger ${isApprenticeMode ? "hidden" : ""}" type="button" data-action="delete-one-on-one">Delete</button>
      </article>
    `)
    .join("");
}

function renderFiles(apprentice) {
  if (!apprentice.files.length) {
    els.filesList.innerHTML = `<p class="muted">No files uploaded yet.</p>`;
    return;
  }
  els.filesList.innerHTML = apprentice.files
    .map((file) => `
      <article class="file-card" data-file="${file.id}">
        <div>
          <a href="${file.dataUrl}" download="${escapeAttr(file.name)}">${escapeHtml(file.name)}</a>
          <p class="muted">${escapeHtml(file.type || "file")} • ${formatBytes(file.size)} • ${new Date(file.addedAt).toLocaleDateString()}</p>
        </div>
        <button class="danger ${isApprenticeMode ? "hidden" : ""}" type="button" data-action="delete-file">Delete</button>
      </article>
    `)
    .join("");
}

function updateTabVisibility() {
  const notesTab = document.querySelector("[data-tab='notes']");
  const filesUpload = document.querySelector(".upload-button");
  notesTab.classList.toggle("hidden", isApprenticeMode);
  els.addResource.classList.toggle("hidden", isApprenticeMode);
  els.addNote.classList.toggle("hidden", isApprenticeMode);
  els.addOneOnOne.classList.toggle("hidden", isApprenticeMode);
  filesUpload.classList.toggle("hidden", isApprenticeMode);
  els.deleteApprentice.classList.toggle("hidden", isApprenticeMode);
  if (isApprenticeMode && !els.notesPanel.classList.contains("hidden")) {
    setActiveTab("levels");
  }
}

function updateApprentice(patch) {
  const apprentice = activeApprentice();
  if (!apprentice) return;
  Object.assign(apprentice, patch, { updatedAt: new Date().toISOString() });
  saveState();
  saveApprenticeCloud(apprentice);
  render();
}

function updateProgressDisplay(apprentice) {
  els.overallPercent.textContent = `${percentFor(apprentice)}%`;
  renderLevelSummary(apprentice);
  renderApprenticeList();
  LEVELS.forEach((level) => {
    const card = els.levelsPanel.querySelector(`[data-level="${level.id}"]`);
    if (!card) return;
    const percent = percentFor(apprentice, level.id);
    const percentText = card.querySelector(".overall span");
    if (percentText) percentText.textContent = `${percent}%`;
  });
}

async function updateTask(taskKey, field, value, sourceRow = null) {
  const apprentice = activeApprentice();
  if (!apprentice) return;
  apprentice.progress[taskKey] ||= {};
  apprentice.progress[taskKey][field] = value;
  if (field === "complete" && value && !apprentice.progress[taskKey].completedOn) {
    apprentice.progress[taskKey].completedOn = new Date().toISOString().slice(0, 10);
    const dateInput = sourceRow?.querySelector("[data-field='completedOn']");
    if (dateInput) dateInput.value = apprentice.progress[taskKey].completedOn;
  }
  apprentice.updatedAt = new Date().toISOString();
  saveState();
  sourceRow?.classList.toggle("complete", Boolean(apprentice.progress[taskKey].complete));
  updateProgressDisplay(apprentice);
  await saveTaskCloud(apprentice, taskKey);
}

function addFiles(files) {
  const apprentice = activeApprentice();
  if (!apprentice) return;
  [...files].forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      apprentice.files.unshift({
        id: crypto.randomUUID(),
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: reader.result,
        addedAt: new Date().toISOString(),
      });
      saveState();
      renderFiles(apprentice);
    };
    reader.readAsDataURL(file);
  });
}

async function saveApprenticeCloud(apprentice) {
  if (!cloudReady || !staffSession) return;
  await trackCloudSave(cloudClient.from("apprentices").update(appApprenticeToDb(apprentice)).eq("id", apprentice.id), "Saving apprentice");
}

async function saveTaskCloud(apprentice, taskKey) {
  if (!cloudReady || !staffSession) {
    setCloudStatus("Progress changed on this screen, but live saving is not connected.");
    return;
  }
  await trackCloudSave(
    cloudClient.rpc("save_task_progress", {
      input_apprentice_id: apprentice.id,
      input_task_key: taskKey,
      input_complete: Boolean(apprentice.progress[taskKey].complete),
      input_completed_on: apprentice.progress[taskKey].completedOn || null,
      input_taught_by: apprentice.progress[taskKey].taughtBy || null,
      input_method: apprentice.progress[taskKey].method || null,
      input_notes: apprentice.progress[taskKey].notes || null,
    }),
    "Saving progress",
  );
}

async function saveResourceCloud(resource) {
  if (!cloudReady || !staffSession) return;
  const payload = {
    title: resource.title,
    category: resource.category || "FAQ",
    body: resource.body || "",
    sort_order: resource.sortOrder || 0,
    updated_at: new Date().toISOString(),
  };
  if (/^[0-9a-f-]{36}$/i.test(resource.id)) {
    payload.id = resource.id;
    await cloudClient.from("resources").upsert(payload);
  } else {
    const { data } = await cloudClient.from("resources").insert(payload).select("*").single();
    if (data) Object.assign(resource, dbResourceToApp(data));
  }
}

async function saveQuestionCloud(apprentice, question) {
  if (!cloudReady) return;
  if (isApprenticeMode && apprenticeToken && !/^[0-9a-f-]{36}$/i.test(question.id)) {
    const first = await cloudClient.rpc("add_question_by_token", { input_token: apprenticeToken, question_body: question.body || "" });
    if (first.error) await cloudClient.rpc("add_question_by_token", { token: apprenticeToken, question_body: question.body || "" });
    await loadApprenticeLinkData();
    renderQuestions(activeApprentice());
    return;
  }
  if (!staffSession) return;
  const payload = {
    apprentice_id: apprentice.id,
    question_date: question.date || new Date().toISOString().slice(0, 10),
    body: question.body || "",
    status: question.status || "Open",
    updated_at: new Date().toISOString(),
  };
  if (/^[0-9a-f-]{36}$/i.test(question.id)) {
    payload.id = question.id;
    await cloudClient.from("apprentice_questions").upsert(payload);
  } else {
    const { data } = await cloudClient.from("apprentice_questions").insert(payload).select("*").single();
    if (data) Object.assign(question, dbQuestionToApp(data));
  }
}

async function saveNoteCloud(apprentice, note) {
  if (!cloudReady || !staffSession) return;
  const payload = {
    apprentice_id: apprentice.id,
    note_date: note.date || new Date().toISOString().slice(0, 10),
    body: note.body || "",
    updated_at: new Date().toISOString(),
  };
  if (/^[0-9a-f-]{36}$/i.test(note.id)) {
    payload.id = note.id;
    await cloudClient.from("staff_notes").upsert(payload);
  } else {
    const { data } = await cloudClient.from("staff_notes").insert(payload).select("*").single();
    if (data) Object.assign(note, dbNoteToApp(data));
  }
}

async function saveOneOnOneCloud(apprentice, meeting) {
  if (!cloudReady || !staffSession) {
    setCloudStatus("One-on-one changed on this screen, but live saving is not connected.");
    return { message: "Live saving is not connected" };
  }
  const payload = {
    input_apprentice_id: apprentice.id,
    input_meeting_id: /^[0-9a-f-]{36}$/i.test(meeting.id) ? meeting.id : null,
    input_meeting_date: meeting.date || new Date().toISOString().slice(0, 10),
    input_subject: meeting.subject || "",
    input_body: meeting.body || "",
  };
  const { data, error } = await trackCloudSave(cloudClient.rpc("save_one_on_one_staff", payload), "Saving one-on-one");
  const savedRow = Array.isArray(data) ? data[0] : data;
  if (savedRow) Object.assign(meeting, dbOneOnOneToApp(savedRow));
  return error;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function formatBytes(bytes) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** i).toFixed(i ? 1 : 0)} ${units[i]}`;
}

els.addForm.addEventListener("submit", async (event) => {
  if (isApprenticeMode) return;
  event.preventDefault();
  if (cloudClient && !staffSession) {
    setCloudStatus("Please log in as staff first");
    return;
  }
  if (cloudClient && !cloudReady) {
    const userId = staffSession?.user?.id;
    setCloudStatus(userId ? `Live mode is not ready yet. Add this User ID to staff_users: ${userId}` : "Live mode is not ready yet. Confirm this user has staff access in Supabase.");
    return;
  }
  const name = els.nameField.value.trim();
  if (!name) return;
  const apprentice = createApprentice(name);
  if (cloudReady && staffSession) {
    setCloudStatus("Adding apprentice...");
    const initialProgress = apprentice.progress;
    const { data, error } = await trackCloudSave(cloudClient.rpc("create_apprentice_staff", { input_name: apprentice.name }), "Adding apprentice");
    if (error) {
      setCloudStatus(`Could not add apprentice: ${error.message}`);
      return;
    }
    const savedRow = Array.isArray(data) ? data[0] : data;
    Object.assign(apprentice, dbApprenticeToApp(savedRow));
    apprentice.progress = initialProgress;
  }
  state.apprentices.push(apprentice);
  activeId = apprentice.id;
  els.nameField.value = "";
  saveState();
  setCloudStatus("Apprentice added");
  render();
});

els.apprenticeList.addEventListener("click", (event) => {
  if (isApprenticeMode) return;
  const button = event.target.closest("[data-id]");
  if (!button) return;
  activeId = button.dataset.id;
  saveState();
  render();
});

els.search.addEventListener("input", renderApprenticeList);
els.activeName.addEventListener("change", () => updateApprentice({ name: els.activeName.value.trim() || "Untitled apprentice" }));
els.startDate.addEventListener("change", () => updateApprentice({ startDate: els.startDate.value }));
els.currentLevel.addEventListener("change", () => updateApprentice({ currentLevel: els.currentLevel.value }));
els.mentorName.addEventListener("change", () => updateApprentice({ mentor: els.mentorName.value.trim() }));

els.levelsPanel.addEventListener("change", (event) => {
  if (isApprenticeMode) return;
  const row = event.target.closest("[data-task]");
  if (!row || !event.target.dataset.field) return;
  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  updateTask(row.dataset.task, event.target.dataset.field, value, row);
});

els.levelsPanel.addEventListener(
  "toggle",
  (event) => {
    const level = event.target.closest?.("details.level-card");
    if (!level) return;
    if (level.open) openLevelIds.add(level.dataset.level);
    else openLevelIds.delete(level.dataset.level);
  },
  true,
);

els.levelsPanel.addEventListener("input", (event) => {
  if (isApprenticeMode) return;
  const row = event.target.closest("[data-task]");
  if (!row || !["notes", "method", "taughtBy"].includes(event.target.dataset.field)) return;
  const apprentice = activeApprentice();
  apprentice.progress[row.dataset.task] ||= {};
  apprentice.progress[row.dataset.task][event.target.dataset.field] = event.target.value;
  saveState();
  saveTaskCloud(apprentice, row.dataset.task);
});

els.levelsPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action='toggle-details']");
  if (!button) return;
  button.closest(".task-row").querySelector(".task-details").classList.toggle("hidden");
});

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTab(button.dataset.tab);
  });
});

function setActiveTab(tabName) {
  document.querySelectorAll(".tabs button").forEach((tab) => tab.classList.toggle("active", tab.dataset.tab === tabName));
  [els.levelsPanel, els.resourcesPanel, els.questionsPanel, els.oneOnOnesPanel, els.notesPanel, els.filesPanel].forEach((panel) => panel.classList.add("hidden"));
  document.querySelector(`#${tabName}Panel`).classList.remove("hidden");
}

els.addResource.addEventListener("click", async () => {
  if (isApprenticeMode) return;
  state.resources = mergeDefaultResources(state.resources);
  const resource = {
    id: crypto.randomUUID(),
    title: "New resource",
    category: "FAQ",
    body: "",
  };
  await saveResourceCloud(resource);
  state.resources.unshift(resource);
  saveState();
  renderResources();
});

els.resourcesList.addEventListener("input", (event) => {
  if (isApprenticeMode) return;
  const card = event.target.closest("[data-resource]");
  if (!card || !event.target.dataset.resourceField) return;
  const resource = state.resources.find((item) => item.id === card.dataset.resource);
  resource[event.target.dataset.resourceField] = event.target.value;
  saveState();
  saveResourceCloud(resource);
});

els.resourcesList.addEventListener("click", async (event) => {
  if (isApprenticeMode) return;
  if (!event.target.matches("[data-action='delete-resource']")) return;
  const id = event.target.closest("[data-resource]").dataset.resource;
  if (cloudReady && staffSession && /^[0-9a-f-]{36}$/i.test(id)) {
    await cloudClient.from("resources").delete().eq("id", id);
  }
  state.resources = state.resources.filter((resource) => resource.id !== id);
  saveState();
  renderResources();
});

els.addQuestion.addEventListener("click", async () => {
  const apprentice = activeApprentice();
  if (!apprentice) return;
  ensureApprenticeShape(apprentice);
  const question = {
    id: `temp-${crypto.randomUUID()}`,
    date: new Date().toISOString().slice(0, 10),
    body: "",
    status: "Open",
  };
  if (!isApprenticeMode) await saveQuestionCloud(apprentice, question);
  apprentice.questions.unshift(question);
  saveState();
  renderQuestions(apprentice);
});

els.questionsList.addEventListener("input", async (event) => {
  const card = event.target.closest("[data-question]");
  if (!card || !event.target.dataset.questionField) return;
  const apprentice = activeApprentice();
  const question = apprentice.questions.find((item) => item.id === card.dataset.question);
  question[event.target.dataset.questionField] = event.target.value;
  saveState();
  if (!isApprenticeMode) await saveQuestionCloud(apprentice, question);
});

els.questionsList.addEventListener("change", async (event) => {
  const card = event.target.closest("[data-question]");
  if (!card || !event.target.dataset.questionField) return;
  const apprentice = activeApprentice();
  const question = apprentice.questions.find((item) => item.id === card.dataset.question);
  question[event.target.dataset.questionField] = event.target.value;
  saveState();
  await saveQuestionCloud(apprentice, question);
});

els.questionsList.addEventListener("click", async (event) => {
  if (!event.target.matches("[data-action='delete-question']")) return;
  const apprentice = activeApprentice();
  const id = event.target.closest("[data-question]").dataset.question;
  if (cloudReady && staffSession && /^[0-9a-f-]{36}$/i.test(id)) {
    await cloudClient.from("apprentice_questions").delete().eq("id", id);
  }
  apprentice.questions = apprentice.questions.filter((question) => question.id !== id);
  saveState();
  renderQuestions(apprentice);
});

els.addNote.addEventListener("click", async () => {
  if (isApprenticeMode) return;
  const apprentice = activeApprentice();
  if (!apprentice) return;
  const note = { id: crypto.randomUUID(), date: new Date().toISOString().slice(0, 10), body: "" };
  await saveNoteCloud(apprentice, note);
  apprentice.notes.unshift(note);
  saveState();
  renderNotes(apprentice);
});

els.notesList.addEventListener("input", async (event) => {
  if (isApprenticeMode) return;
  const card = event.target.closest("[data-note]");
  if (!card || !event.target.dataset.noteField) return;
  const apprentice = activeApprentice();
  const note = apprentice.notes.find((item) => item.id === card.dataset.note);
  note[event.target.dataset.noteField] = event.target.value;
  saveState();
  await saveNoteCloud(apprentice, note);
});

els.notesList.addEventListener("click", async (event) => {
  if (isApprenticeMode) return;
  if (!event.target.matches("[data-action='delete-note']")) return;
  const apprentice = activeApprentice();
  const id = event.target.closest("[data-note]").dataset.note;
  if (cloudReady && staffSession && /^[0-9a-f-]{36}$/i.test(id)) {
    await cloudClient.from("staff_notes").delete().eq("id", id);
  }
  apprentice.notes = apprentice.notes.filter((note) => note.id !== id);
  saveState();
  renderNotes(apprentice);
});

els.addOneOnOne.addEventListener("click", async () => {
  if (isApprenticeMode) return;
  const apprentice = activeApprentice();
  if (!apprentice) return;
  ensureApprenticeShape(apprentice);
  const meeting = {
    id: `temp-${crypto.randomUUID()}`,
    date: new Date().toISOString().slice(0, 10),
    subject: "",
    body: "",
  };
  apprentice.oneOnOnes.unshift(meeting);
  saveState();
  renderOneOnOnes(apprentice);
  const error = await saveOneOnOneCloud(apprentice, meeting);
  if (!error) renderOneOnOnes(apprentice);
});

els.oneOnOnesList.addEventListener("input", async (event) => {
  if (isApprenticeMode) return;
  const card = event.target.closest("[data-one-on-one]");
  if (!card || !event.target.dataset.oneOnOneField) return;
  const apprentice = activeApprentice();
  const meeting = apprentice.oneOnOnes.find((item) => item.id === card.dataset.oneOnOne);
  meeting[event.target.dataset.oneOnOneField] = event.target.value;
  saveState();
  await saveOneOnOneCloud(apprentice, meeting);
});

els.oneOnOnesList.addEventListener("click", async (event) => {
  if (isApprenticeMode) return;
  if (!event.target.matches("[data-action='delete-one-on-one']")) return;
  const apprentice = activeApprentice();
  const id = event.target.closest("[data-one-on-one]").dataset.oneOnOne;
  if (cloudReady && staffSession && /^[0-9a-f-]{36}$/i.test(id)) {
    await trackCloudSave(cloudClient.rpc("delete_one_on_one_staff", { input_meeting_id: id }), "Deleting one-on-one");
  }
  apprentice.oneOnOnes = apprentice.oneOnOnes.filter((meeting) => meeting.id !== id);
  saveState();
  renderOneOnOnes(apprentice);
});

els.profileFileUpload.addEventListener("change", (event) => {
  if (isApprenticeMode) return;
  addFiles(event.target.files);
  event.target.value = "";
});

els.filesList.addEventListener("click", (event) => {
  if (isApprenticeMode) return;
  if (!event.target.matches("[data-action='delete-file']")) return;
  const apprentice = activeApprentice();
  const id = event.target.closest("[data-file]").dataset.file;
  apprentice.files = apprentice.files.filter((file) => file.id !== id);
  saveState();
  renderFiles(apprentice);
});

els.exportData?.addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `apprentice-growth-tracker-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

els.importData?.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported.apprentices)) throw new Error("Invalid backup");
      state.apprentices = imported.apprentices;
      state.resources = imported.resources?.length ? imported.resources : state.resources;
      state.theme = imported.theme || state.theme;
      activeId = imported.activeId || state.apprentices[0]?.id || null;
      saveState();
      render();
    } catch {
      alert("That backup file could not be imported.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
});

els.printProfile.addEventListener("click", () => window.print());
els.deleteApprentice.addEventListener("click", async () => {
  if (isApprenticeMode) return;
  const apprentice = activeApprentice();
  if (!apprentice || !confirm(`Delete ${apprentice.name}?`)) return;
  if (cloudReady && staffSession) {
    await cloudClient.from("apprentices").delete().eq("id", apprentice.id);
  }
  state.apprentices = state.apprentices.filter((item) => item.id !== apprentice.id);
  activeId = state.apprentices[0]?.id || null;
  saveState();
  render();
});

els.themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveState();
  render();
});

els.copyApprenticeLink.addEventListener("click", async () => {
  const apprentice = activeApprentice();
  if (!apprentice) return;
  const fallbackBase = cloudConfig.appBaseUrl || "https://jolly-puppy-6e68f4.netlify.app/";
  const url = new URL(window.location.protocol === "file:" ? fallbackBase : window.location.href);
  url.searchParams.set("view", "apprentice");
  url.searchParams.delete("apprentice");
  if (apprentice.shareToken) {
    url.searchParams.set("token", apprentice.shareToken);
  } else {
    url.searchParams.set("apprentice", apprentice.id);
  }
  try {
    await navigator.clipboard.writeText(url.toString());
    els.copyApprenticeLink.textContent = "Copied";
    setTimeout(() => {
      els.copyApprenticeLink.textContent = "Copy apprentice link";
    }, 1400);
  } catch {
    prompt("Copy this apprentice link:", url.toString());
  }
});

async function handleStaffLogin(emailField, passwordField) {
  await ensureCloudClient();
  setupAuthListener();
  if (!cloudClient) {
    setCloudStatus("Live setup could not load Supabase. Refresh once, or check browser blockers.");
    return;
  }
  const email = emailField?.value.trim();
  const password = passwordField?.value;
  if (!email || !password) {
    setCloudStatus("Enter your email and password to log in.");
    return;
  }
  setCloudStatus("Logging in...");
  const { data, error } = await cloudClient.auth.signInWithPassword({ email, password });
  if (error) {
    setCloudStatus(`Could not log in: ${error.message}`);
    return;
  }
  staffSession = data.session;
  if (passwordField) passwordField.value = "";
  if (els.staffEmail) els.staffEmail.value = email;
  if (els.loginEmail) els.loginEmail.value = email;
  renderAuth();
  await loadStaffData();
  render();
}

els.loginScreenForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  await handleStaffLogin(els.loginEmail, els.loginPassword);
});

els.loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  await handleStaffLogin(els.staffEmail, els.staffPassword);
});

els.signOut?.addEventListener("click", async (event) => {
  event.preventDefault();
  [localStorage, sessionStorage].forEach((storage) => {
    Object.keys(storage)
      .filter((key) => key.startsWith("sb-") || key.includes("supabase"))
      .forEach((key) => storage.removeItem(key));
  });
  clearStaffView();
  ensureCloudClient().then(() => {
    if (!cloudClient) return;
    cloudClient.auth.signOut().catch(() => {
      // The local UI has already cleared; a network sign-out failure should not freeze the app.
    });
  });
});

window.addEventListener("beforeunload", (event) => {
  if (pendingCloudSaves > 0) {
    event.preventDefault();
    event.returnValue = "";
  }
});

initApp();
