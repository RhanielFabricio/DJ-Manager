const supabaseUrl = 'https://salycxlqilvcegcvyfvd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhbHljeGxxaWx2Y2VnY3Z5ZnZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMTQwOTIsImV4cCI6MjA1OTg5MDA5Mn0.bB7HnoRpthsu6Ss650IkVv3R6jAC4J3cIosfjfAy_GY';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById("evento-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const local = document.getElementById("local").value;
  const data = document.getElementById("data").value;
  const cache = document.getElementById("cache").value;
  const status = document.getElementById("status").value;

  const novoEvento = {
    nome,
    local,
    data,
    descricao: cache,
    status
  };

  const { error } = await supabase.from('Dj-Manager').insert([novoEvento]);

  if (error) {
    console.error("Erro ao salvar:", error.message);
    alert("Erro ao salvar evento!");
  } else {
    alert("Evento salvo com sucesso!");
    document.getElementById("evento-form").reset();
  }
});
