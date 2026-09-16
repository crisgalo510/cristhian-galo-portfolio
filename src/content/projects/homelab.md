---
title: "Galo Homelab"
description: "A segmented, enterprise-style homelab built with a Cisco SG300 managed switch and VLANs for segmentation, OPNsense on Proxmox for routing and firewalling, and self-hosted services reachable remotely over Tailscale."
stack: ["Proxmox", "OPNsense", "Cisco SG300", "Docker", "Tailscale"]
featured: true
date: 2026-07-01
imagePending: true
# githubRepo: "your-username/homelab-notes"   # uncomment if you document this in a repo
---
Built a segmented home network using a Cisco SG300-10MP managed switch, configuring VLANs (Management, Servers, Personal, IoT, Guest) and an 802.1Q trunk port to replace a flat network with enterprise-style segmentation. Deployed OPNsense as the primary router and firewall on Proxmox VE, configuring VLAN sub-interfaces, DHCP, and AT&T IP Passthrough to provide dedicated routing and a public WAN IP for the network. Self-hosted virtualized infrastructure on Proxmox includes a Docker host (Homepage dashboard, Uptime Kuma monitoring) and an AdGuard Home/Unbound DNS filtering stack, with Tailscale configured for secure remote access.
