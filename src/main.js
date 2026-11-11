// VELOCITY RUSH 3D - Application Entry Point
import { Game } from './game/Game.js';
import './styles/main.css';
import './styles/menu.css';
import './styles/hud.css';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('webgl-canvas');
  const uiContainer = document.getElementById('ui-root');

  if (!canvas || !uiContainer) {
    console.error('Fatal: Required DOM containers not found.');
    return;
  }

  // Initialize Game Instance
  const game = new Game(canvas, uiContainer);

  // Global debug reference if needed
  window.__VELOCITY_RUSH_GAME__ = game;
});

